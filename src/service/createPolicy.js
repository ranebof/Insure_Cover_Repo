import axios from "axios";

const API = "http://16.170.143.105:8000/api/";

const createPolicy = (number,name,description,company) => {
    return axios.post(API + "create/",{
        number,name,description,company
    },{
        headers: {
            "Accept":"*/*",
            "Content-Type": "application/json",
        }
    })
}

const createService =  {
    createPolicy
}

export default createService