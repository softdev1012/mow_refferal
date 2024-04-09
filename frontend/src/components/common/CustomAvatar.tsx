import MuiAvatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import LogoImg from "../../assets/img/Avatar.png";

interface CustomAvatarProps {
  width: string;
  height: string;
  url?: string;
}

const CustomAvatar: React.FC<CustomAvatarProps> = ({ width, height, url }) => {
  const baseURL = "http://localhost:8001/uploads/";
  const imgUrl = url && url != "" ? baseURL + url : LogoImg
  return (
    <Stack direction="row" spacing={2}>
      <MuiAvatar
        alt="User Name"
        src={imgUrl}
        sx={{ marginTop: "2rem" }}
        style={{
          width: width,
          height: height,
        }}
      />
    </Stack>
  );
}

export default CustomAvatar;
