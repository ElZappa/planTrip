import React from "react";
import "./App.css";
import NavbarComponent from "./components/navbar/NavbarComponent";
import { Box, CssBaseline, Grid } from "@mui/material";
import ItemCard from "./components/cardTrip/itemCard";

function App() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <NavbarComponent />
        <Grid
          container
          spacing={2}
          mt={7}
          ml={0}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {/* <Grid> //Activar spinner de carga cuando se llame al servior
            <CircularProgress />
          </Grid> */}
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
      </Box>
    </>
  );
}

export default App;
