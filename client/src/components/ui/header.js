import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
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
    <ElevationScroll>
      {/* By default, the Appbar uses position fixed. */}
      <AppBar position="fixed">
        {/* The toolbar allows for stacking items horizontally 
            (It will stack vertically by default without the toolbar) 
        */}
        <Toolbar>Arc Development</Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}
