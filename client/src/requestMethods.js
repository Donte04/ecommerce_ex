import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNmQ4Yjc1NDE0ODE2MGFlNGQ0MzQxMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTA2MzI1NywiZXhwIjoxNjM1MzIyNDU3fQ.ORa4YspDYmLhtTrrGVBCLDKbIW0xQ8OQwQE0tCqP0uE";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Baerer ${TOKEN}`},
});