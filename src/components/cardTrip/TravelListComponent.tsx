
import "../../App.css";
import { Box, Grid } from "@mui/material";
import ItemCard from "./itemCard";

function ItemCardList() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
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

export default ItemCardList;
