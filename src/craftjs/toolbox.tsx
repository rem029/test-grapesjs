// components/Toolbox.js
import React from "react";
import { Box, Typography, Grid, Button as MaterialButton } from "@mui/material";

export const Toolbox = () => {
  return (
    <Box px={2} py={2}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={1}
      >
        <Box pb={2}>
          <Typography>Drag to add</Typography>
        </Box>
        <Grid component="div" direction="column" item>
          <MaterialButton variant="contained">Button</MaterialButton>
        </Grid>
        <Grid component="div" direction="column" item>
          <MaterialButton variant="contained">Text</MaterialButton>
        </Grid>
        <Grid component="div" direction="column" item>
          <MaterialButton variant="contained">Container</MaterialButton>
        </Grid>
        <Grid component="div" direction="column" item>
          <MaterialButton variant="contained">Card</MaterialButton>
        </Grid>
      </Grid>
    </Box>
  );
};
