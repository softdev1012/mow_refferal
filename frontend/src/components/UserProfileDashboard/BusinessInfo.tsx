import MuiAvatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import LogoImg from "../../assets/img/business.png";
import React from 'react';

interface BusinessInfoProps {
  url?: string;
}

const BusinessInfo: React.FC<BusinessInfoProps> = ({ url }) => {
  const baseURL = "http://localhost:8001/uploads/";
  const imgUrl = url && url != "" ? baseURL + url : LogoImg
  return (
    <Stack direction="row" spacing={2}>
      <MuiAvatar
        alt="Business Logo"
        src={imgUrl}
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
