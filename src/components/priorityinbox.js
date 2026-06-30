import React,
{
  useEffect,
  useState
}
from "react";

import {
  fetchPriority
}
from "../api";

import NotificationCard
from "./NotificationCard";

function PriorityInbox() {

  const [priority,
        setPriority]
        = useState([]);

  useEffect(() => {

    fetchPriority().then(
      (res) => {

      setPriority(
        res.data
      );

    });

  }, []);

  return (

    <div>

      <h2>
        Priority Notifications
      </h2>

      {
        priority.map((n) => (

          <NotificationCard
            key={n.id}
            notification={n}
          />

        ))
      }

    </div>
  );
}

export default PriorityInbox;