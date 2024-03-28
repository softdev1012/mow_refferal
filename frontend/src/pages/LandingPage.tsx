import * as React from 'react';
import { PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import AppAppBar from '../components/landingpage/AppAppBar';
import Hero from '../components/landingpage/Hero';
import LogoCollection from '../components/landingpage/LogoCollection';
import Highlights from '../components/landingpage/Highlights';
import Pricing from '../components/landingpage/Pricing';
import Features from '../components/landingpage/Features';
import Testimonials from '../components/landingpage/Testimonials';
import FAQ from '../components/landingpage/FAQ';
import Footer from '../components/landingpage/Footer';





const LandingPage = () => {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const [showCustomTheme] = React.useState(true);
//   const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  

  return (
    <ThemeProvider theme={showCustomTheme ? defaultTheme : defaultTheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Hero />
      <Box sx={{ bgcolor: 'background.default' }}>
        <LogoCollection />
        <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </Box>
      
    </ThemeProvider>
  );
}
export default LandingPage;