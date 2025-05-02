import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000", // ou sua URL
});

export const getPoliticos = async (page: number = 1, perPage: number = 50) => {
  const res = await api.get("/politicos", {
    params: { page, per_page: perPage }
  });
  return res.data;
};
