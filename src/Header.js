// Header.js

import React, { useState, useEffect } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartSharpIcon from "@mui/icons-material/AddShoppingCartSharp";
import PersonOutlineSharpIcon from "@mui/icons-material/PersonOutlineSharp";
import PersonPinCircleSharpIcon from "@mui/icons-material/PersonPinCircleSharp";
import CardGiftcardSharpIcon from "@mui/icons-material/CardGiftcardSharp";
import { useStateValue } from "./stateprovider";
import { auth } from "./firebase1";

const Header = () => {
  const [{ cart, user }, dispatch] = useStateValue();
  const [selectedLocation, setSelectedLocation] = useState(
    localStorage.getItem("selectedLocation") || ""
  );
  const [showDropdown, setShowDropdown] = useState(false);
  const [cityInput, setCityInput] = useState(""); // Track the input value

  const cities = [
    "Delhi",
    "Bengaluru",
    "Kolkata",
    "Chennai",
    "Gorakhpur",
    "Lucknow",
    "Hyderabad",
    "Visakhapatnam",
    "Indore",
    "Ahmedabad",
    "Pune",
    "Bhopal",
    "Mumbai",
    "Surat",
    "Meerut",
    "Bihar",
    "Shimla",
    "Goa",
    "Kanpur",
  ];
  const handleLocationClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLocationSelect = (city) => {
    setSelectedLocation(city);
    setCityInput(city); // Set the input value when a city is selected
    setShowDropdown(false);
    localStorage.setItem("selectedLocation", city);
  };

  const handleLocationClear = () => {
    setSelectedLocation("");
    setCityInput("");
    setShowDropdown(false);

    localStorage.removeItem("selectedLocation");
  };
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is >>>", authUser);

      if (authUser) {
        // User login
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // User logout
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);

  const handleInputChange = (event) => {
    const inputText = event.target.value;
    setCityInput(inputText);

    // Open the dropdown when there's input, close it when empty
    if (inputText) {
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  const navigateTOLogin = () => {
    if (!user) {
      window.location.href = "/sign-in";
    }
  };

  const navigateToHome = () => {
    window.location.href = "/";
  };

  const navigateToCheckout = () => {
    window.location.href = "/checkout";
  };

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <img
        className="header_logo"
        src="/nat_logo.png"
        alt="Nation Cart.."
        onClick={navigateToHome}
      />
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div className="header_option" onClick={handleLocationClick}>
          <PersonPinCircleSharpIcon className="header_account" />
          <span className="header_optionLineThree">
            {selectedLocation || "Location"}
          </span>
          {showDropdown && (
            <div className="location-options">
              <input
                type="text"
                placeholder="Enter a city"
                value={cityInput}
                onChange={handleInputChange}
              />
              <ul className="location-list">
                {cities
                  .filter((city) =>
                    city.toLowerCase().includes(cityInput.toLowerCase())
                  )
                  .map((city, index) => (
                    <li key={index} onClick={() => handleLocationSelect(city)}>
                      {city}
                    </li>
                  ))}
              </ul>
              {selectedLocation && (
                <button
                  className="clear-location-button"
                  onClick={handleLocationClear}
                >
                  Clear Location
                </button>
              )}
            </div>
          )}
        </div>
        <div className="header_option" onClick={navigateToCheckout}>
          <div className="header_signin">
            <AddShoppingCartSharpIcon />
            <span className="header_cartcount">{cart?.length}</span>
          </div>
          <span className="header_optionLineThree"> Cart</span>
        </div>
        <div className="header_option1">
          <div className="header_optionIcon">
            <CardGiftcardSharpIcon className="header_account" />
          </div>
          <div className="header_optionText">
            <span className="header_optionLineOne">Return & Exchange</span>
            <span className="header_optionLineTwo">Orders</span>
          </div>
        </div>
        <div
          className="header_option1"
          onClick={() => {
            navigateTOLogin();
            handleAuthentication();
          }}
        >
          <div className="header_optionIcon">
            <PersonOutlineSharpIcon className="header_account" />
          </div>
          <div className="header_optionText">
            <span className="header_optionLineOne"> Hello, User</span>
            <span className="header_optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </div>
      </div>
      <div className="header_selectedLocation">
        <span className="header_selectedLocationText">
          <PersonPinCircleSharpIcon />
          {selectedLocation ? selectedLocation : "Select The Location"}
        </span>
      </div>
    </div>
  );
};

export default Header;
