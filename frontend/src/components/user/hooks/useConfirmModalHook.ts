import { useUserDeleteHook, useUserUpdateHook } from ".";
import { changeModalStatus, useAppDispatch, useAppSelector } from "../../../store";
import { ModalStatus } from "../../../types";

const useConfirmModalHook = () => {
    const modalStatus = useAppSelector(state => state.modalStatus.modalStatus);
    const currentId = useAppSelector(state => state.modalStatus.currentId) as string;

    const dispatch = useAppDispatch();

    const deleteMutation = useUserDeleteHook();
    const updateMutation = useUserUpdateHook();
    const isOpen = modalStatus === "remove" || modalStatus === ModalStatus.CONVERT? true : false;

    const handleSubmit = async () => {
        modalStatus === "remove" ?  await deleteMutation.mutateAsync(currentId) : await updateMutation.mutateAsync({updatedUser: {_id: null, isOwner : true}, _id: currentId});
        dispatch(changeModalStatus({modalStatus: ModalStatus.CLOSE, currentId: undefined}));
    }

    return { isOpen, dispatch, handleSubmit }
}

export default useConfirmModalHook;