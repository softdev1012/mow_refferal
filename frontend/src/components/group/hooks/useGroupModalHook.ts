import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
import { changeModalStatus, useAppDispatch, useAppSelector } from "../../../store";
import { useGroupCreateHook, useGroupUpdateHook, useGetGroupHook } from "."; 
import { ModalStatus } from "../../../types";
import UploadService from "../../../services/FileUploadService";

const useGroupModalHook = () => {
    const modalStatus = useAppSelector(state => state.modalStatus.modalStatus);
    const currentId = useAppSelector(state => state.modalStatus.currentId) as string;
    const dispatch = useAppDispatch();

    const createMutation = useGroupCreateHook();
    const updateMutation = useGroupUpdateHook();
    
    const isEdit: boolean = modalStatus === "edit" ? true : false;

    const { data: editablegroup }  = useGetGroupHook(currentId, isEdit);

    const isOpen = modalStatus === "open" || modalStatus === "edit" ? true : false;

    const validationSchema = z.object({
        name: z.string(),
        location: z.string(),
        owner: z.string(),
        profileStatus: z.boolean(),
        logo: z.any(),
        counterMember: z.number(),
        groupSize: z.number(),
    });

    type ValidationSchema = z.infer<typeof validationSchema>;

    const defaultValues = {
        name: "",
        location: "",
        owner:"",
        profileStatus: false,
        logo: undefined,
        counterMember: 1,
        groupSize: 0,
    }

    const {register, handleSubmit, reset, formState: {errors}} = useForm<ValidationSchema>({
        // defaultValues: defaultValues,
        // resolver: zodResolver(validationSchema)
    });

    useEffect(() => {
        if (!currentId) {
          reset(defaultValues);
        } else if (editablegroup)
          {
            reset({
            name: editablegroup.name,
            location: editablegroup.location,
            owner: editablegroup.owner,
            profileStatus: editablegroup.profileStatus,
            logo: editablegroup.logo,
            counterMember: editablegroup.counterMember,
            groupSize: editablegroup.groupSize,
          });}
      }, [editablegroup, currentId]);
  function isFile(value: any): value is File {
    return value instanceof File;
  }

    const onSubmit: SubmitHandler<ValidationSchema> = async (data: ValidationSchema) => {
      if (data.logo[0] && isFile(data.logo[0])) {
        const uploadFile = data.logo[0];
        UploadService.upload(uploadFile, (event: any) => { })
          .then((response) => {
              isEdit ? updateMutation.mutateAsync({updatedGroup: {...data, _id: null, logo: response.data.filename}, _id: currentId}) : createMutation.mutateAsync({...data, _id: null, logo: response.data.filename});
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        isEdit ? await updateMutation.mutateAsync({updatedGroup: {...data, _id: null, logo: null}, _id: currentId}) : await createMutation.mutateAsync({...data, _id: null, logo: "default.png"});
      }
      dispatch(
          changeModalStatus({
            modalStatus: ModalStatus.CLOSE,
            currentId: undefined,
          })
        );
        reset(defaultValues);
      };
    return {isOpen, register, handleSubmit, onSubmit, dispatch, errors}
}

export default useGroupModalHook;