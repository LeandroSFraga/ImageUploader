import { getCookie, removeCookie, setCookie } from 'typescript-cookie';
export function setToken(value: string) {
  setCookie('token', value, {
    expires: 365,
    path: '',
    secure: true,
    sameSite: 'strict',
  });
}

export function getToken() {
  return getCookie('token');
}

export function removeToken() {
  removeCookie('token');
}
