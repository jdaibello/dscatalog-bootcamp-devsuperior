import axios from "axios";

export const api = axios.create({
  baseURL: "https://daibello-dscatalog.herokuapp.com",
});
