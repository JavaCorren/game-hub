import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ff06cc6c1219410db4c751af75e05f29",
  },
});

export default apiClient;
