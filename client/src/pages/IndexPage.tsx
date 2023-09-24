import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";


const IndexPage = () => {
  return (
    <>
      <br />
      <img src="https://cdn3d.iconscout.com/3d/free/thumb/react-5645899-4695757.png" />{/* height="200vw" width="200vh"*/}
      <br />
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Button style={{
            width: 225,
            borderColor: "black",
            color: "black",
            borderRadius: 0,
            margin: "1em",
            boxShadow: "5px 10px #888888"
          }}
            href="/pageone"
            variant="outlined"><strong>Try It</strong></Button>
        </Box>
      </div>
    </>

  );
};

export default IndexPage;