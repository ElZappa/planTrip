// import React from "react";
// import "./App.css";
import NavbarComponent from "./components/navbar/NavbarComponent";
// import { Box, CssBaseline, Grid } from "@mui/material";
// import ItemCard from "./components/cardTrip/itemCard";
import { Route, Routes } from "react-router-dom";
import ItemCardList from "./components/cardTrip/TravelListComponent";

const App: React.FC<{}> = () => {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<ItemCardList />} />
      </Routes>
    </>
  );
};

export default App;
