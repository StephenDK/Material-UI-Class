import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

export default function Header(props) {
  return (
    // By default, the Appbar uses position fixed.
    <AppBar position="fixed">
      {/* The toolbar allows for stacking items horizontally 
        (It will stack vertically by default without the toolbar) 
    */}
      <Toolbar>Arc Development</Toolbar>
    </AppBar>
  );
}
