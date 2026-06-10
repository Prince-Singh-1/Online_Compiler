import axios from "axios";

const API =
  "http://localhost:5000/api";

export const executeCode =
  async (payload) => {
    const response =
      await axios.post(
        `${API}/run`,
        payload
      );

    return response.data;
  };