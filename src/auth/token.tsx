export function setToken(userToken: object) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

export function getToken() {
  return sessionStorage.getItem('token');
}
