import { Box, Button, Container, Grid } from "@material-ui/core"
import React, { useContext } from "react"
import { Context } from "../index"
import firebase from "firebase/app"

const Login = () => {
  const { auth } = useContext(Context)
  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    await auth.signInWithPopup(provider)
  }

  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50 }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid
          style={{
            width: 400,
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 30px 0 rgba(0, 0, 0, 0.19)",
            borderRadius: "10px",
          }}
          container
          alignItems={"center"}
          direction={"column"}
        >
          <Box p={5}>
            <Button onClick={login} variant={"outlined"}>
              Login via Google
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Login
