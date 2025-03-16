import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  styled,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HGFLogo from "./../assets/logo.png";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  boxShadow: theme.shadows[1],
  backgroundColor: "#fff",
  color: theme.palette.text.primary,
}));

const NavLink = styled(Link)(({ theme }) => ({
  margin: theme.spacing(0, 2),
  textDecoration: "none",
  color: "#0c4e7b",
  position: "relative",
  transition: "color 0.3s ease-in-out",
  "&:hover": {
    color: "#0c4e7b",
    "&::after": {
      width: "100%",
      left: 0,
      opacity: 1,
    },
  },
  "&::after": {
    content: '""',
    position: "absolute",
    left: "50%",
    bottom: 0,
    width: 0,
    height: "2px",
    backgroundColor: "#0c4e7b",
    transition: "width 0.4s ease-in-out, left 0.4s ease-in-out, opacity 0.4s",
    opacity: 0,
  },
}));

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "#" },
    { name: "Campaigns", path: "#" },
    { name: "Donate", path: "#" },
    { name: "Events", path: "#" },
    { name: "Contact", path: "#" },
  ];

  const drawer = (
    <Box sx={{ width: 250 }} role='presentation'>
      <List>
        {navItems.map(item => (
          <ListItem button key={item.name} component={Link} href={item.path}>
            <ListItemText
              primary={item.name}
              primaryTypographyProps={{
                fontWeight: 500,
                color: "#333",
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <StyledAppBar position='static'>
        <Toolbar>
          <Box
            component='a'
            href='/'
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "inherit",
              "&:hover": { opacity: 0.8 },
            }}
          >
            <Box
              component='img'
              src={HGFLogo}
              alt='HGF logo'
              sx={{ height: 50, mr: 1 }}
            />
            <Typography
              variant='h6'
              component='div'
              sx={{ flexGrow: 1, fontWeight: "bold", color: "#072366" }}
            >
              Help Grace Foundation
            </Typography>
          </Box>

          {isMobile ? (
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='end'
              onClick={handleDrawerToggle}
              sx={{ ml: "auto" }}
            >
              <MenuIcon sx={{ color: "#333" }} />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", ml: "auto" }}>
              {navItems.map(item => (
                <NavLink href={item.path} key={item.name}>
                  {item.name}
                </NavLink>
              ))}
            </Box>
          )}
        </Toolbar>
      </StyledAppBar>

      <Drawer
        variant='temporary'
        anchor='right'
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 250,
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

// import "./Header.css";
// import HGFLogo from "./../assets/logo.png";
// export default function Header() {
//     return (
//         <header className='header'>
//             <a href='/' className='logo-container'>
//                 <img src={HGFLogo} className='nav-logo' alt='HGF logo' />
//                 <span>Help Grace Foundation</span>
//             </a>
//             <nav>
//                 <ul className='nav-list'>
//                     <a href='/'>Home</a>
//                     <a href='/'>About</a>
//                     <a href='/'>Campaigns</a>
//                     <a href='/'>Events</a>
//                     <a href='/'>Contact</a>
//                 </ul>
//             </nav>
//         </header>
//     );
// }
