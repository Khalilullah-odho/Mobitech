import http from "./httpService";

const apiEndPoint = "/brands";

export function getBrands() {
  return http.get(apiEndPoint);
}

export function saveBrands(name) {
  return http.post(apiEndPoint, name);
}

export function deleteBrand(id) {
  return http.delete(apiEndPoint + "/" + id);
}
