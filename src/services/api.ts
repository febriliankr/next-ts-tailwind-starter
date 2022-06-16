import Axios from "axios";

const api = Axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URI}`,
  withCredentials: true,
});

export type ApiResponse = {
  data?: any;
  error?: { error: Error; message: string } | any;
};

export default api;
