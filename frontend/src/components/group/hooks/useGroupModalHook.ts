import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
import { changeModalStatus, useAppDispatch, useAppSelector } from "../../../store";
import { useGroupCreateHook, useGroupUpdateHook, useGetGroupHook } from "."; 
import { ModalStatus } from "../../../types";

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
        logo: z.string(),
        counterMember: z.number(),
    });

    type ValidationSchema = z.infer<typeof validationSchema>;

    const defaultValues = {
        name: "",
        location: "",
        owner:"",
        profileStatus: false,
        logo: "default.png",
        counterMember: 0
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
            counterMember: editablegroup.counterMember
          });}
      }, [editablegroup, currentId]);

    const onSubmit: SubmitHandler<ValidationSchema> = async (data: ValidationSchema) => {   
      // console.log("submit", data);
      // return;
      isEdit ? await updateMutation.mutateAsync({updatedGroup: {...data, _id: null}, _id: currentId}) : await createMutation.mutateAsync({...data, _id: null});
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