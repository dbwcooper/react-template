import * as dayjs from 'dayjs';

export const pushURL = (url: string) => {
  window.location.href = url;
  // window.history.replaceState(null, '', url);
};

export function setCookie(name: string, value: string, days: number = 7) {
  let d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  let expires = 'expires=' + d.toUTCString();
  document.cookie = name + '=' + value + '; ' + expires;
}
export function getCookie(name: string): string {
  let v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return v ? v[2] : '';
}

export function setToken(token: string) {
  setCookie('token', token, 7);
}
export function getToken(): string {
  return getCookie('token');
}

export function logout(url: string) {
  setCookie('token', '', 0);
  pushURL(url);
}

export const getTimeFormat = (date: string) =>
  dayjs(date).format('YYYY年M月D日');
