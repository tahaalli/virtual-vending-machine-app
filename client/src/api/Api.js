import axios from "axios";
import download from "downloadjs";

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

export const Checkout = async (product_id) => {
  try {
    // GET req
    const result = await fetch(
      API_ENDPOINT + "/product/checkout/" + product_id
    );
    // Ensure 200 OK
    if (result.status !== 200) return false;
    const blob = await result.blob();
    download(blob, "checkout.json");
    return true;
  } catch (error) {
    return false;
  }
};

export const FetchBalance = async () => {
  try {
    // GET req
    const result = await axios.get(API_ENDPOINT + "/session/balance");
    // Ensure 200 OK
    if (!result || result.status !== 200) return;
    return result.data;
  } catch (error) {
    return;
  }
};

export const UpdateBalance = async (balance) => {
  try {
    // PUT req
    const result = await axios.put(
      API_ENDPOINT + "/session/balance/" + balance
    );
    // Ensure 200 OK
    if (!result || result.status !== 200) return false;
    return true;
  } catch (error) {
    return false;
  }
};

export const UpdateToken = async (token) => {
  try {
    // POST req
    const result = await axios.post(API_ENDPOINT + "/session/auth/" + token);
    // Ensure 200 OK
    if (result.status !== 200) return false;
    return true;
  } catch (error) {
    return false;
  }
};

export const AuthUser = async () => {
  try {
    // GET req
    const result = await axios.get(API_ENDPOINT + "/session/auth");
    if (!result || result.status !== 200) return false;
    return true;
  } catch (error) {
    return false;
  }
};

export const Restock = async (id, quantity) => {
  try {
    const response = await axios.put(
      API_ENDPOINT + "/product/restock/" + id + "/" + quantity
    );
    // Ensure 200 OK
    if (!response || response.status !== 200) return false;
    return true;
  } catch (error) {
    return false;
  }
};

export const Reprice = async (id, cost) => {
  try {
    const response = await axios.put(
      API_ENDPOINT + "/product/price/" + id + "/" + cost
    );
    // Ensure 200 OK
    if (!response || response.status !== 200) return false;
    return true;
  } catch (error) {
    return false;
  }
};
