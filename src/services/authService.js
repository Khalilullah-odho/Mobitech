import http from "./httpService";
import jwtDecode from "jwt-decode";

const apiEndpoint = "/auth";

http.setJwt(getJwt());

async function login(email, password) {
  const { data: jwt } = await http.post(apiEndpoint, {
    email,
    password,
  });
  localStorage.setItem("token", jwt);
}

async function logout() {
  localStorage.removeItem("token");
}

function getCurrentUser() {
  try {
    const jwt = localStorage.getItem("token");
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
}
function getJwt() {
  return localStorage.getItem("token");
}

const auth = {
  login,
  logout,
  getCurrentUser,
};

export default auth;
