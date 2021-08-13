import React, { useContext } from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import { Button, Grid } from "@material-ui/core"
import { NavLink } from "react-router-dom"
import { LOGIN_ROUTE } from "./utils/consts"
import { useAuthState } from "react-firebase-hooks/auth"
import { Context } from ".."

const Navbar = () => {
  const { auth } = useContext(Context)
  const [user] = useAuthState(auth)
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Grid container justifyContent={"flex-end"}>
          {user ? (
            <Button
              size="small"
              onClick={() => auth.signOut()}
              variant="contained"
              color="secondary"
            >
              Logout
            </Button>
          ) : (
            <NavLink to={LOGIN_ROUTE}></NavLink>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
