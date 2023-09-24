import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import React from "react";

const DFAWidget = () => {
return(
    <>
    <div style={{
        backgroundColor: "blue",
        height: 400,
        width: 300,
        margin: "auto",
        marginTop: "5%",
        color: "white"
      }}>
        <br />
        <br />
        <TextField id="filled-basic" label="User ID" variant="filled" style={{
          backgroundColor: "white"
        }} />
        <br />
        <br />
        <TextField id="filled-basic" label="Password" type="password" variant="filled" style={{
          backgroundColor: "white"
        }} />
        <br />
        <FormControlLabel required control={<Checkbox color="default" sx={{
    color:"white"}} />} label="Save User ID" />
        <br />
        <br />
        <Button variant="contained">Log In</Button>
        <br />
        <br />
        <Link href="#" underline="always" style={{
          color: "white",
          fontSize: "16px"
        }}>
          Forgot Password
        </Link>
      </div>
    </>
)
};

export default DFAWidget;