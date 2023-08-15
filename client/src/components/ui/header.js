import React, { Fragment } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";

import useScrollTrigger from "@mui/material/useScrollTrigger";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true, // Delay set for when the user scrolls
    threshold: 0, // The amount a user has to scroll before change
  });

  return React.cloneElement(children, {
    // This makes a clone of the wrapped component with a styled elevation
    elevation: trigger ? 4 : 0,
  });
}

export default function Header(props) {
  return (
    <Fragment>
      <ElevationScroll>
        {/* By default, the Appbar uses position fixed. 
            The color prop set to primary uses the themeProvider and the colors we set
          */}
        <AppBar position="fixed" color="primary">
          {/* The toolbar allows for stacking items horizontally 
                (It will stack vertically by default without the toolbar) 
            */}
          <Toolbar>
            <Typography variant="h3">Arc Development</Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className="Heloo" style={{ marginBottom: "4rem" }} />
    </Fragment>
  );
}
