import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import LogoImg from "../assets/img/largelogo.png";
import { MenuIntroduction } from "../components";
import { useNavigate } from 'react-router-dom';
import { IPages } from '../types';
import { hasRole } from '../utils';
import { useAuth } from '../components/common/AuthProvider';

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate()
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [pages, setPages] = React.useState<IPages[]>();
  const {user} = useAuth();
  
  const makePages = (roles: string[]) => {
    if (hasRole("SUPERADMIN", roles)) {
      setPages([
        {name: "Groups", url: "/groups"},
        {name: "Meetings", url: "/meetings"},
        {name: "Referrals", url: "/referrals"},
        {name: "Users", url: "/users"},
        {name: "Owners", url: "/owners"},
      ]);
    } else if (hasRole("ADMIN", roles)) {
      setPages([
        {name: "Groups", url: "/owner/group"},
        {name: "Meetings", url: "/owner/meeting"}
      ]);
    } else {
      setPages([
        {name: "Groups", url: "/user/group"},
        {name: "Meetings", url: "/user/meeting"}
      ]);
    }
  }

  React.useEffect(() => {
    makePages(user?.roles);
  }, []);

  const handleMenuItemClick = (page: string) => {
    handleCloseNavMenu();
    navigate(page);
  }

  return (
    <AppBar position="static">
      <Box sx={{ background: `linear-gradient(180deg, #CEE5FD, #FFF)` }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages && pages.map((page) => (
                <MenuItem key={page.name} onClick={() => handleMenuItemClick(page.url)}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            component="a"
            href="/admin/dashboard"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              alignItems: "center",
            }}
          >
            <img
              alt="Logo"
              src={LogoImg}
              style={{ width: "9rem", height: "5rem", marginRight: "8px" }}
            />
          </Box>
          <Box sx={{ flexGrow: 1, ml:6, display: { xs: 'none', md: 'flex' } }}>
            {pages && pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => handleMenuItemClick(page.url)}
                sx={{ mx: 1, my: 2, display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

            <Box sx={{ flexGrow: 0 }}>
              <MenuIntroduction />
            </Box>
          </Box>
        </Container>
      </Box>
    </AppBar>
  );
}

export default ResponsiveAppBar;
