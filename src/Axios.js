import axios from "axios";
export const request = axios.create({
    baseURL: process.env.NODE_ENV === "development" ? "http://localhost:8080/api/v1" : "https://epic-apparel.herokuapp.com/api/v1"
})