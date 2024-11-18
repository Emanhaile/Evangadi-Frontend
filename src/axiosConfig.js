import axios from "axios";

const axiosBase = axios.create({
    // baseURL: "https://evangadi-backend-3-jocb.onrender.com/api"
    baseURL: "http://localhost:5500/api"
})

export default axiosBase;