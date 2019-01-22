import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID 40f1dad9c28e2bafa34ac333189bfd6270542799c946c02c905218d2a6368642`
  }
});
