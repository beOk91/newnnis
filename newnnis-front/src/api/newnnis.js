import axios from "axios";

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

const getUserList = async () => {
  try {
    const response = await axios.get(`${apiUrl}/user/getAllUsers`);
    console.log("response", res);
  } catch (error) {
    console.error("Failed to fetch data list:", error);
    throw error;
  }
};

export const getTest = async () => {
  try {
    const response = await axios.get("http://localhost:8080/test");
    console.log(response.data); // 응답 데이터 처리
  } catch (error) {
    console.error("There was an error!", error);
  }
};

export { getUserList };
