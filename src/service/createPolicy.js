import axios from "axios";

const API = "http://13.49.244.146:8000/";

const createPolicy = (number, name, description, company) => {
    return axios.post(API + "create/", {
        number, name, description, company
    }, {
        headers: {
            "Accept": "*/*",
            "Content-Type": "application/json",
        }
    })
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.error("Сталася помилка при створенні полісу:", error);
        throw error;
    });
}

const createService = {
    createPolicy
}

export default createService;
