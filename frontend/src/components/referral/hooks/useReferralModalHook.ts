import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {  z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { changeModalStatus, useAppDispatch, useAppSelector } from "../../../store";
import { useReferralCreateHook, useReferralUpdateHook, useGetReferralHook } from "."; 
import { ModalStatus } from "../../../types";

const useReferralModalHook = () => {
    const modalStatus = useAppSelector(state => state.modalStatus.modalStatus);
    const currentId = useAppSelector(state => state.modalStatus.currentId) as string;
    const dispatch = useAppDispatch();

    const createMutation = useReferralCreateHook();
    const updateMutation = useReferralUpdateHook();
    
    const isEdit: boolean = modalStatus === "edit" ? true : false;

    const { data: editablereferral }  = useGetReferralHook(currentId, isEdit);

    const isOpen = modalStatus === "open" || modalStatus === "edit" ? true : false;

    const validationSchema = z.object({
        name: z.string().min(5, {message: "Referral Name must be at least 5 letters."}),
        clan: z.string().min(5, {message: "Clan Name must be at least 5 letters."}),
        clanStatus: z.boolean(),
        profileStatus: z.boolean(),
    });

    type ValidationSchema = z.infer<typeof validationSchema>;

    const defaultValues = {
        groupname: "",
        fullname: "",
        phone: "",
        from: "",
        value: "",
        payStatus: false,
       
    }

    const {register, handleSubmit, reset, formState: {errors}} = useForm<ValidationSchema>({
        defaultValues: defaultValues,
        resolver: zodResolver(validationSchema)
    });

    useEffect(() => {
        if (!currentId) {
          reset(defaultValues);
        } else if (editablereferral)
          reset({
            groupname: editablereferral.groupname,
            fullname: editablereferral.fullname,
            phone: editablereferral.phone,
            from: editablereferral.from,
            value: editablereferral.value,
            payStatus: editablereferral.payStatus,
            
          });
      }, [editablereferral, currentId]);

    const onSubmit: SubmitHandler<ValidationSchema> = async (data: ValidationSchema) => {
      console.log(data);
        isEdit ? await updateMutation.mutateAsync({updatedReferral: {...data, _id: null}, _id: currentId}) : await createMutation.mutateAsync({...data, _id: null});
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

export default useReferralModalHook;