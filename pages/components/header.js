import { Navbar, Container, Nav } from 'react-bootstrap';
import styles from "../../styles/Home.module.css";
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import Button from '@mui/material/Button';
import { useTheme } from 'next-themes';

function Header() {
  // Destructure values from useTheme hook
  const { theme, setTheme } = useTheme();

  return (
    <>
      {/* Navigation Bar */}
      <Navbar className="justify-content-center">
        <Container className="d-flex justify-content-center">
          <Nav className="backdrop-blur-sm bg-light" style={{ maxHeight: '100px' }} id={styles['Navbar']} navbarScroll>
            {/* Home Link */}
            <Nav.Link className="flex-grow-0 text-center" href="/">
              Home
            </Nav.Link>
            {/* Form Link */}
            <Nav.Link className="flex-grow-0 text-center" href="/form">
              Form
            </Nav.Link>
            {/* Theme Toggle Button */}
            <Button>
              {theme === "dark" ? (
                // Night Mode Icon
                <ModeNightIcon style={{ color: "black" }} onClick={() => setTheme('light')} />
              ) : (
                // Light Mode Icon
                <LightModeIcon style={{ color: "black" }} onClick={() => setTheme('dark')} />
              )}
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
