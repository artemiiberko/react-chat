import { Container, Grid } from "@material-ui/core"
import React from "react"
import "./../App.css"

const Loader = () => {
  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 65 }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid container alignItems={"center"} direction={"column"}>
          <div className="lds-default">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Loader
