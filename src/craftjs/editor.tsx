import { Typography, Grid, Card, Paper } from "@mui/material";
import React from "react";
import { SettingsPanel } from "./settings-panel.tsx";
import { Topbar } from "./top-bar.tsx";
import { Toolbox } from "./toolbox.tsx";
import { Container } from "./container.tsx";
import { Button } from "./button.tsx";
import { Editor, Frame } from "@craftjs/core";

export const CraftJsEditor = () => {
  return (
    <div style={{ margin: "0 auto", width: "800px" }}>
      <Editor resolver={{ Card, Button, Text, Container }}>
        <Typography variant="h5" align="center">
          A super simple page editor
        </Typography>
        <Grid container spacing={3} style={{ paddingTop: "10px" }}>
          <Topbar />
          <Grid item xs>
            <Frame>
              <Container padding={5} background="#eee">
                <Card />
              </Container>
            </Frame>
          </Grid>
          <Grid item xs={3}>
            <Paper>
              <Toolbox />
              <SettingsPanel />
            </Paper>
          </Grid>
        </Grid>
      </Editor>
    </div>
  );
};
