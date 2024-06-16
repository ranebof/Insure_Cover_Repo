import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API = "http://138.68.127.156:8000/api/policy/";

const savePolicy = async (data) => {
  try {
    const response = await axios.post(API, data);
    toast.success("Дані успішно збережені!");
    return { data: response.data };
  } catch (error) {
    toast.error("Щось пішло не так!");
  }
};

const savePolicyService = {
  savePolicy,
};

export default savePolicyService;
