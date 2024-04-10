import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {  z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
import { changeModalStatus, useAppDispatch, useAppSelector } from "../../../store";
import { useUserCreateHook, useUserUpdateHook, useGetUserHook } from "."; 
import { ModalStatus } from "../../../types";

const useUserModalHook = () => {
    const modalStatus = useAppSelector(state => state.modalStatus.modalStatus);
    const currentId = useAppSelector(state => state.modalStatus.currentId) as string;
    const dispatch = useAppDispatch();

    const createMutation = useUserCreateHook();
    const updateMutation = useUserUpdateHook();
    
    const isEdit: boolean = modalStatus === "edit" ? true : false;

    const { data: editableuser }  = useGetUserHook(currentId, isEdit);

    const isOpen = modalStatus === "open" || modalStatus === "edit" ? true : false;

    const validationSchema = z.object({
        name: z.string().min(5, {message: "User Name must be at least 5 letters."}),
        clan: z.any(),
        clanStatus: z.boolean(),
        profileStatus: z.boolean(),
        firstName: z.string(),
        lastName: z.string(),
        phone: z.string(),
        city: z.string(),
        street: z.string(),
        zipcode: z.string(),
        email: z.string(),
        password: z.string(),
        confirmpassword: z.string(),
        businessName: z.string(),
        businessPhone: z.string(),
        businessEmail: z.string(),
        businessWebsite: z.string(),
        googleLink: z.string(),
        profilePhoto: z.string(),
        businessLogo: z.string(),
        group: z.string(),
        seat: z.string(),
    });

    type ValidationSchema = z.infer<typeof validationSchema>;

    const defaultValues = {
      name: "",
      clan: "",
      clanStatus: false,
      profileStatus: false,
      firstName: "",
      lastName: "",
      phone: "",
      city: "",
      street: "",
      zipcode: "",
      email: "",
      password: "",
      confirmpassword: "",
      businessName: "",
      businessPhone: "",
      businessEmail: "",
      businessWebsite: "",
      googleLink: "",
      profilePhoto: "",
      businessLogo: "",
      group: "",
      seat: "",
    }

    const {register, handleSubmit, reset, formState: {errors}} = useForm<ValidationSchema>({
        // defaultValues: defaultValues,
        // resolver: zodResolver(validationSchema)
    });

    useEffect(() => {
        if (!currentId) {
          reset(defaultValues);
        } else if (editableuser)
          reset({
            name: editableuser.name,
            clan: editableuser.group?.name,
            clanStatus: editableuser.clanStatus,
            profileStatus: editableuser.profileStatus,
            firstName: editableuser.firstName,
            lastName: editableuser.lastName,
            phone: editableuser.phone,
            city: editableuser.city,
            street: editableuser.street,
            zipcode: editableuser.zipcode,
            email: editableuser.email,
            password: editableuser.password,
            confirmpassword: editableuser.confirmpassword,
            businessName: editableuser.businessName,
            businessPhone: editableuser.businessName,
            businessEmail: editableuser.businessEmail,
            businessWebsite: editableuser.businessWebsite,
            googleLink: editableuser.googleLink,
            profilePhoto: editableuser.profilePhoto,
            businessLogo: editableuser.businessLogo,
            group: editableuser.group,
            seat: editableuser.seat,
          });
      }, [editableuser, currentId]);

    const onSubmit: SubmitHandler<ValidationSchema> = async (data: ValidationSchema) => {
      console.log(data);
        isEdit ? await updateMutation.mutateAsync({updatedUser: {...data, _id: null}, _id: currentId}) : await createMutation.mutateAsync({...data, _id: null});
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

export default useUserModalHook;