import React, { useState, useEffect } from "react";
import {
  Box,
  Select,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  CircularProgress,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

const SearchBar = ({ onSearch, initialState = "", initialCity = "" }) => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState(initialState);
  const [selectedCity, setSelectedCity] = useState(initialCity);
  const [loadingStates, setLoadingStates] = useState(false);
  const [loadingCities, setLoadingCities] = useState(false);

  // Fetch states on mount
  useEffect(() => {
    const fetchStates = async () => {
      setLoadingStates(true);
      try {
        const response = await axios.get(
          "https://restaurantdata.onrender.com/states",
        );
        if (Array.isArray(response.data)) {
          setStates(response.data);
        } else if (response.data && response.data.states) {
          setStates(response.data.states);
        }
      } catch (err) {
        console.error("Failed to fetch states:", err);
      } finally {
        setLoadingStates(false);
      }
    };
    fetchStates();
  }, []);

  // Fetch cities when state changes
  useEffect(() => {
    if (!selectedState) {
      setCities([]);
      return;
    }
    const fetchCities = async () => {
      setLoadingCities(true);
      try {
        const response = await axios.get(
          `https://restaurantdata.onrender.com/cities/${selectedState}`,
        );
        if (Array.isArray(response.data)) {
          setCities(response.data);
        } else if (response.data && response.data.cities) {
          setCities(response.data.cities);
        }
      } catch (err) {
        console.error(`Failed to fetch cities for ${selectedState}:`, err);
      } finally {
        setLoadingCities(false);
      }
    };
    fetchCities();
  }, [selectedState]);

  const handleStateChange = (event) => {
    const stateVal = event.target.value;
    setSelectedState(stateVal);
    setSelectedCity("");
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(selectedState, selectedCity);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 2,
        alignItems: "center",
        width: "100%",
        backgroundColor: "#ffffff",
        padding: 3,
        borderRadius: 3,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
      }}
    >
      {/* State Dropdown Container */}
      <Box sx={{ flex: 1, width: "100%" }}>
        <div id="state" style={{ width: "100%" }}>
          <FormControl fullWidth size="medium">
            <InputLabel id="state-label">State</InputLabel>
            <Select
              labelId="state-label"
              id="state-select"
              value={selectedState}
              label="State"
              onChange={handleStateChange}
              startAdornment={
                <LocationOnIcon sx={{ color: "action.active", mr: 1 }} />
              }
              endAdornment={
                loadingStates ? (
                  <CircularProgress size={20} sx={{ mr: 2 }} />
                ) : null
              }
            >
              {states.map((st) => (
                <MenuItem key={st} value={st}>
                  {st}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </Box>

      {/* City Dropdown Container */}
      <Box sx={{ flex: 1, width: "100%" }}>
        <div id="city" style={{ width: "100%" }}>
          <FormControl fullWidth size="medium" disabled={!selectedState}>
            <InputLabel id="city-label">City</InputLabel>
            <Select
              labelId="city-label"
              id="city-select"
              value={selectedCity}
              label="City"
              onChange={handleCityChange}
              startAdornment={
                <LocationOnIcon sx={{ color: "action.active", mr: 1 }} />
              }
              endAdornment={
                loadingCities ? (
                  <CircularProgress size={20} sx={{ mr: 2 }} />
                ) : null
              }
            >
              {cities.map((ct) => (
                <MenuItem key={ct} value={ct}>
                  {ct}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </Box>

      {/* Search Button */}
      <Button
        type="submit"
        id="searchBtn"
        variant="contained"
        size="large"
        startIcon={<SearchIcon />}
        className="btn-primary-custom"
        sx={{
          height: 56,
          px: 4,
          width: { xs: "100%", md: "auto" },
          whiteSpace: "nowrap",
        }}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
