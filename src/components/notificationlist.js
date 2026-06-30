import React,
{
  useEffect,
  useState
}
from "react";

import {
  Button
}
from "@mui/material";

import {
  fetchNotifications
}
from "../api";

import NotificationCard
from "./NotificationCard";

import FilterBar
from "./FilterBar";

function NotificationList() {

  const [notifications, setNotifications]
    = useState([]);

  const [page, setPage]
    = useState(1);

  const [type, setType]
    = useState("");

  const limit = 5;

  useEffect(() => {

    fetchNotifications(
      page,
      limit,
      type
    ).then((res) => {

      setNotifications(
        res.data
      );

    });

  }, [page, type]);

  return (

    <div>

      <h2>
        All Notifications
      </h2>

      <FilterBar
        setType={setType}
      />

      {
        notifications.map((n) => (

          <NotificationCard
            key={n.id}
            notification={n}
          />

        ))
      }

      <br />

      <Button
        onClick={() =>
          setPage(page - 1)
        }
        disabled={page === 1}
      >
        Prev
      </Button>

      <Button
        onClick={() =>
          setPage(page + 1)
        }
      >
        Next
      </Button>

    </div>
  );
}

export default NotificationList;