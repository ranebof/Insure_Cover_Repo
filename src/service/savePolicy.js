import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API = "http://138.68.127.156:8000/api/db/policy/";


const savePolicy = async (data) => {
  try {
    await axios.post(API, data);
    toast.success("Дані успішно збережені!");
    window.location.href = "/disease";
  } catch (error) {
    toast.error("Щось пішло не так!");
  }
};
const getPolicy = async () => {
  try {
    const response = await axios.get(API);
    console.log(response.data);
    return response.data;
  } catch (error) {
    toast.error("Щось пішло не так!");
  }
};

const updatePolicy = async (id, updatedData) => {
  try {
    const response = await axios.put(`${API}${id}/`, updatedData);
    toast.success("Поліс відредаговано!");
    return response.data;
  } catch (error) {
    toast.error("Щось пішло не так!");
  }
};
const deletePolicy = async (id) => {
  try {
    const response = await axios.delete(`${API}${id}/`);
    toast.success("Поліс видалено!");
    return response.data;
  } catch (error) {
    toast.error("Щось пішло не так!");
  }
};
const savePolicyService = {
  savePolicy,
  getPolicy,
  updatePolicy,
  deletePolicy,
};

export default savePolicyService;
