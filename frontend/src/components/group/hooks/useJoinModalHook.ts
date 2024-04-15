import { SubmitHandler, useForm } from "react-hook-form";
import {  z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
import { changeModalStatus, useAppDispatch, useAppSelector } from "../../../store";
import { ModalStatus } from "../../../types";
import useGroupJoinHook from "./useGroupJoinHook";

const useJoinModalHook = () => {
    const modalStatus = useAppSelector(state => state.modalStatus.modalStatus);
    const currentId = useAppSelector(state => state.modalStatus.currentId) as string;
    const dispatch = useAppDispatch();

    const mutation = useGroupJoinHook();

    const isOpen = modalStatus === ModalStatus.JOIN ? true : false;

    const validationSchema = z.object({
        seat: z.string(),
    });

    type ValidationSchema = z.infer<typeof validationSchema>;

    const defaultValues = {
      seat: "",
    }

    const {register, handleSubmit, reset, formState: {errors}} = useForm<ValidationSchema>({
        // defaultValues: defaultValues,
        // resolver: zodResolver(validationSchema)
    });

    const onSubmit: SubmitHandler<ValidationSchema> = async (data: ValidationSchema) => {
        await mutation.mutateAsync({_id: currentId, seat: data?.seat});
        dispatch(
            changeModalStatus({
              modalStatus: ModalStatus.CLOSE,
              currentId: undefined,
            })
          );
          reset(defaultValues);
        };
    return {isOpen, register, handleSubmit, reset, onSubmit, dispatch, errors}
}

export default useJoinModalHook;