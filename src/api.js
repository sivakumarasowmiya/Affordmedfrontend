import axios from "axios";

const API = "http://localhost:5000";

export const fetchNotifications = (page, limit, type) =>
  axios.get(`${API}/notifications`, {
    params: {
      page,
      limit,
      notification_type: type
    }
  });

export const fetchPriority = () =>
  axios.get(`${API}/priority`);