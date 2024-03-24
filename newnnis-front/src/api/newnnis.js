import axios from "axios";

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

const searchAllUsers = async () => {
  console.log(`${apiUrl}/user/searchAllUsers`);
  return axios
    .get(`${apiUrl}/user/searchAllUsers`) // 환경 변수를 사용하여 전체 URL 구성
    .then((response) => response.data);
};

const searchRankByGroup = async (params) => {
  console.log(`${apiUrl}/user/searchRankByGroup`);
  return axios
    .get(`${apiUrl}/matchHistory/searchRankByGroup`, {
      params: params,
    }) // 환경 변수를 사용하여 전체 URL 구성
    .then((response) => response.data);
};

const searchMatches = async (params) => {
  console.log(`${apiUrl}/match/searchMatches`);
  return axios
    .get(`${apiUrl}/match/searchMatches`, {
      params: params,
    }) // 환경 변수를 사용하여 전체 URL 구성
    .then((response) => response.data);
};

const saveMatches = async (params) => {
  console.log(`${apiUrl}/match/saveMatches`);
  return axios
    .post(`${apiUrl}/match/saveMatches`, params) // 수정된 부분
    .then((response) => response.data);
};

const updateMatches = async (params) => {
  console.log(`${apiUrl}/match/updateMatches`);
  return axios
    .post(`${apiUrl}/match/updateMatches`, params) // 수정된 부분
    .then((response) => response.data);
};

export {
  searchAllUsers,
  searchRankByGroup,
  searchMatches,
  saveMatches,
  updateMatches,
};
