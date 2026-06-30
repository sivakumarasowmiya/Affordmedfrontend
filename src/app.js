import React from "react";

import {
  Container,
  Typography
}
from "@mui/material";

import NotificationList
from "./components/NotificationList";

import PriorityInbox
from "./components/PriorityInbox";

function App() {

  return (

    <Container>

      <Typography
        variant="h3"
      >

        Campus Notification System

      </Typography>

      <PriorityInbox />

      <NotificationList />

    </Container>
  );
}

export default App;