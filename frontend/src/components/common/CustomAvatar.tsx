import MuiAvatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import LogoImg from "../../assets/img/Avatar.png";

interface CustomAvatarProps {
  width: string;
  height: string;
}

const CustomAvatar: React.FC<CustomAvatarProps> = ({ width, height }) => {
  return (
    <Stack direction="row" spacing={2}>
      <MuiAvatar
        alt="User Name"
        src={LogoImg}
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
