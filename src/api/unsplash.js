import axios from "axios";


export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID VUCvIVBaP98_v2zoGq1tOQuN8eaYsIv2M4EdawWwMDM"
  }
});
