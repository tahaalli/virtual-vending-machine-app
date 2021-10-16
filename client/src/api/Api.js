import axios from "axios";

const API_ENDPOINT = "http://localhost:3001/api";

export const FetchSodas = async () => {
  try {
    // GET req
    const result = await axios.get(API_ENDPOINT + "/products");
    // Ensure 200 OK
    if (!result || result.status !== 200) return;
    return result.data;
  } catch (error) {
    return;
  }
};
