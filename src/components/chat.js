import { Avatar, Button, Container, Grid, TextField } from "@material-ui/core"
import React, { useContext, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useCollectionData } from "react-firebase-hooks/firestore"
import { Context } from ".."
import Loader from "./Loader"
import firebase from "firebase/app"

const Chat = () => {
  const { auth, firestore } = useContext(Context)
  const [user] = useAuthState(auth)
  const [value, setValue] = useState("")
  const [messages, loading] = useCollectionData(
    firestore.collection("messages").orderBy("createdAt")
  )

  const sendMessage = async () => {
    firestore.collection("messages").add({
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setValue("")
  }

  if (loading) {
    return <Loader />
  }
  return (
    <Container>
      <Grid
        container
        justifyContent={"center"}
        style={{ height: window.innerHeight - 70, marginTop: 20 }}
      >
        <div
          style={{
            width: "60%",
            height: "75vh",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 30px 0 rgba(0, 0, 0, 0.19)",
            borderRadius: "10px",
            overflowY: "auto",
          }}
        >
          {messages.map((message) => (
            <div
              key={message.createdAt}
              style={{
                padding: "10px",
                margin: "10px",
                width: "fit-content",
                marginLeft: message.uid === user.uid ? "auto" : "10px",
              }}
            >
              <Grid
                style={{
                  width: "fit-content",
                  marginLeft: message.uid === user.uid ? "auto" : "0px",
                }}
                alignItems={"center"}
                container
              >
                <Avatar
                  style={{ height: "30px", width: "30px" }}
                  src={message.photoURL}
                />
                <div
                  style={{
                    paddingLeft: "5px",
                    background: "#EBEBEC",
                    borderRadius: "10px",
                    padding: "2px 5px",
                  }}
                >
                  {message.displayName}
                </div>
              </Grid>
              <div
                style={{
                  fontSize: "23px",
                  marginTop: "10px",
                  padding: "10px",
                  color: "white",
                  background: "#1472FF",
                  borderRadius: "15px",
                  width: "fit-content",
                  marginLeft: message.uid === user.uid ? "auto" : "10px",
                  maxWidth: "80%",
                }}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
        <Grid
          container
          alignItems={"center"}
          justifyContent={"center"}
          style={{ width: "60%" }}
        >
          <TextField
            onKeyPress={(ev) => {
              if ((ev.key === "Enter") & (value !== "")) {
                sendMessage()

                ev.preventDefault()
              }
            }}
            label="Message..."
            variant="outlined"
            rowsMax={2}
            style={{ width: "80%", marginRight: "25px" }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button
            type="submit"
            onClick={value !== "" ? sendMessage : null}
            variant="contained"
            color="primary"
            size="large"
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Chat
