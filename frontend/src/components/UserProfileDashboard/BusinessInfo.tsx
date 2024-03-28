import MuiAvatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import LogoImg from "../../assets/img/business.png";

const BusinessInfo = () => {
  return (
    <Stack direction="row" spacing={2}>
      <MuiAvatar
        alt="Business Logo"
        src={LogoImg}
        sx={{
          marginTop: "2rem",
          width: "10rem",
          height: "10rem",
          borderRadius: 0, // Set borderRadius to 0 for square corners
        }}
      />
    </Stack>
  );
}

export default BusinessInfo;
