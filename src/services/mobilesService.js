import http from "./httpService";

const apiEndPoint = "/mobiles";

function getMobiles() {
  return http.get(apiEndPoint);
}

function saveMobile(mobile) {
  if (mobile._id) {
    const body = { ...mobile };
    delete body._id;
    return http.put(apiEndPoint + "/" + mobile._id, body);
  }
  return http.post(apiEndPoint, mobile);
}

function deleteMobile(mobileId) {
  return http.delete(apiEndPoint + "/" + mobileId);
}

function getMobile(mobileId) {
  return http.get(apiEndPoint + "/" + mobileId);
}

const mobile = {
  getMobiles,
  saveMobile,
  deleteMobile,
  getMobile,
};

export default mobile;
