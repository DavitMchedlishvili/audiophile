import axios from "axios";


const baseUrl = "http://localhost:3000"

const api = axios.create({
    baseURL: baseUrl,
    timeout: 10 * 1000,
    timeoutErrorMessage: "Request Timed Out!"

})



api.interceptors.request.use(async (req) => {
    req.headers["Content-Type"] = 'application/json'
    req.headers["Accept"] = 'application/json'
    return req;
})

export default api;
