import React from "react";
import { IconButton, AppBar, Typography, Box, Container } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useAppDispatch, changeModalStatus } from "../../store";
import { ModalStatus } from "../../types";

type ColorType =
  | "#C1FF72"
  | "#FED5D5"
  | "#38B6FF"
  | "#FFDE59"
  | "#D85BA8"
  | "#D9D9D9";

interface MainHeaderProps {
  color: ColorType;
  title: string;
  hasPlus: boolean;
}

const MainHeader: React.FC<MainHeaderProps> = ({ color, title, hasPlus }) => {
  const dispatch = useAppDispatch();

  const handleOpenModal = () => {
    dispatch(
      changeModalStatus({
        modalStatus: ModalStatus.OPEN,
        currentId: undefined,
      })
    );
  };

  return (
    <AppBar position="static" style={{ backgroundColor: color }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            height: "5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h3" component="div" style={{ color: "black" }}>
            {title}
          </Typography>

          {hasPlus && (
            <IconButton
              onClick={handleOpenModal}
              color="inherit"
              aria-label="Add Task"
            >
              <AddIcon style={{ color: "black" }} fontSize="large" />
            </IconButton>
          )}
        </Box>
      </Container>
    </AppBar>
  );
};

export default MainHeader;
