import Cookies from 'js-cookie'

export const getCookie = (name) => Cookies.get(name)
export const setCookie = (name, value) => {
  Cookies.set(name, value)
  // console.log(`${name}=${value}`)
  // document.cookie = "dd=123"
  // document.cookie = `${name}=${value}`
  DATA.user = 1
}
export const clearCookie = (name) => {
  console.log(name)
  Cookies.remove(name)
  document.cookie = name + '=;'
  // document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  DATA.user = 0
}