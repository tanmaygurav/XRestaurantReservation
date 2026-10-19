import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./Home/Home";
import MyBookings from "./MyBookings/MyBookings";
import "./App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2aa7ff",
    },
    secondary: {
      main: "#102851",
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica Neue", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-bookings" element={<MyBookings />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
