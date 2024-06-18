import axios from "axios";

const API = "api/db/icd10classification/<str:policy_number>/"; 

const saveSelectedData = async (selectedData) => {
  try {
    const response = await axios.post(`${API}`, selectedData);
    return response.data;
  } catch (error) {
    console.error('Error saving selected data:', error);
  }
};

export default saveSelectedData;