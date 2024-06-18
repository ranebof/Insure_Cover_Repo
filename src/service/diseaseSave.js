import axios from 'axios';

const API_URL = 'api/db/icd10classification/<str:policy_number>/'; 

const saveSelectedDiseases = async (selectedDiseases) => {
  try {
    const response = await axios.post(`${API_URL}`, selectedDiseases);
    return response.data;
  } catch (error) {
    console.error('Error saving selected diseases:', error);
    throw error;
  }
};

export default saveSelectedDiseases;
