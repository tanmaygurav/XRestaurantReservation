import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/restaurant-logo.png";

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = [
    { title: "Find Restaurants", path: "/" },
    { title: "Locations", path: "/" },
    { title: "Reservations", path: "/" },
    { title: "My Bookings", path: "/my-bookings" },
  ];

  return (
    <>
      <div className="top-bar">
        The health and well-being of our guests and team members is our number
        one priority.
      </div>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ backgroundColor: "#ffffff", borderBottom: "1px solid #e0e0e0" }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Box
              display="flex"
              alignItems="center"
              sx={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            >
              <img
                src={logo}
                alt="Restaurant Logo"
                style={{ height: "40px", marginRight: "10px" }}
              />
              <Typography
                variant="h6"
                component="div"
                sx={{ fontWeight: "bold", color: "#102851" }}
              >
                XRestaurant
              </Typography>
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 3,
              }}
            >
              {navLinks.map((link) => (
                <Button
                  key={link.title}
                  component={Link}
                  to={link.path}
                  sx={{
                    color: "#102851",
                    textTransform: "none",
                    fontWeight: 500,
                  }}
                >
                  {link.title}
                </Button>
              ))}
              <Button
                variant="contained"
                className="btn-primary-custom"
                onClick={() => navigate("/my-bookings")}
              >
                My Bookings
              </Button>
            </Box>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <Box sx={{ width: 250, pt: 2 }}>
          <List>
            {navLinks.map((link) => (
              <ListItem
                key={link.title}
                onClick={() => {
                  navigate(link.path);
                  setMobileOpen(false);
                }}
              >
                <ListItemText primary={link.title} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default NavBar;
