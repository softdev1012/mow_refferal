import { useState, useEffect, useRef } from "react";
import { IImageUpload } from "../../types";
import UploadService from "../../services/FileUploadService";
import { useAppSelector } from "../../store";
import { useGetGroupHook } from "../group";

const ImageUpload: React.FC<IImageUpload> = ({ _id, register, autoFocus, required}) => {

    const currentId = useAppSelector(state => state.modalStatus.currentId) as string;
    const modalStatus = useAppSelector(state => state.modalStatus.modalStatus);
    const isEdit: boolean = modalStatus === "edit" ? true : false;
    const { data: editablegroup }  = useGetGroupHook(currentId, isEdit);

    const [previewImage, setPreviewImage] = useState<string>("");

    const _baseURL = "http://localhost:8001/uploads/";

    useEffect(() => {
        setPreviewImage("default.png");
        if (editablegroup) {
            setPreviewImage(editablegroup.logo);
        }
    }, [editablegroup]);

    const upload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = event.target.files as FileList;
        const uploadFile = selectedFiles?.[0];
        if (!uploadFile) return;
        UploadService.upload(uploadFile, (event: any) => { })
            .then((response) => {
                setPreviewImage(response.data.filename);
            })
            .catch((err) => {

            });
    };
    return (
        <div>
            <div className="row">
                <label className="btn btn-default p-0">
                    <input type="file" accept="image/*" onChange={upload} style={{ display: "none" }} />
                    <input
                        type="hidden"
                        id={_id}
                        autoFocus={autoFocus}
                        required={required}
                        {...register(_id, { value: previewImage })}
                    />
                    <div>
                        <img className="preview" src={_baseURL + previewImage} alt="" />
                    </div>
                </label>
            </div>
        </div>
    );
};

export default ImageUpload;