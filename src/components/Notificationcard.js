import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Chip
} from "@mui/material";

function NotificationCard({ notification }) {
  return (
    <Card sx={{ marginTop: 2 }}>

      <CardContent>

        <Typography variant="h6">
          {notification.type}
        </Typography>

        <Typography>
          {notification.message}
        </Typography>

        <Typography variant="body2">
          {notification.timestamp}
        </Typography>

        <Chip
          label={
            notification.viewed
              ? "Viewed"
              : "New"
          }
          sx={{ marginTop: 1 }}
        />

      </CardContent>

    </Card>
  );
}

export default NotificationCard;