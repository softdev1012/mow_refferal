import { useState, useEffect} from "react";
import { IImageUpload } from "../../types";
import { useAppSelector } from "../../store";
import { useGetGroupHook } from "../group";

const ImageUpload: React.FC<IImageUpload> = ({ _id, register, width, height}) => {

    const currentId = useAppSelector(state => state.modalStatus.currentId) as string;
    const modalStatus = useAppSelector(state => state.modalStatus.modalStatus);
    const isEdit: boolean = modalStatus === "edit" ? true : false;
    const { data: editablegroup }  = useGetGroupHook(currentId, isEdit);
    const [previewImage, setPreviewImage] = useState<string>("");
    const imageURL = "http://localhost:8001/uploads/";

    useEffect(() => {
        setPreviewImage(imageURL + "default.png");
        if (editablegroup && editablegroup.logo) {
            setPreviewImage(imageURL + editablegroup.logo);
        }
    }, [editablegroup]);

    const handleUploadedFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = event.target.files as FileList;
        const uploadFile = selectedFiles?.[0];
        const imageUrl = URL.createObjectURL(uploadFile);
        setPreviewImage(imageUrl);
    }

    return (
        <label className="btn btn-default p-0">
            <input
                type="file" 
                accept="image/*"
                className="hidden-input"
                name={_id}
                {...register(_id)}
                onChange={handleUploadedFile}
            />
            <div>
                <img className="preview" src={previewImage} alt="" width={width} height={height}/>
            </div>
        </label>
    );
};

export default ImageUpload;