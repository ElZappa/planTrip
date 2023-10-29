import React from "react";
import "./App.css";
import ResponsiveNavbar from "./components/navbar/Navbar";
import { Grid } from "@mui/material";
import ItemCard from "./components/cardTrip/itemCard";

function App() {
  return (
    <div>
      <ResponsiveNavbar />
      <Grid
        container
        spacing={2}
        mt={0}
        ml={0}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid item xs={12} sm={6} md={3} xl={2}>
          <ItemCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3} xl={2}>
          <ItemCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3} xl={2}>
          <ItemCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3} xl={2}>
          <ItemCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3} xl={2}>
          <ItemCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3} xl={2}>
          <ItemCard />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
