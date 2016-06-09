import ajax from '@fdaciuk/ajax'

export const adminLogin = (email, password) => {
  return ajax({
    method: 'POST',
    url: 'http://localhost:3001/admin/login',
    withCredentials: true,
    data: {
      email,
      password
    }
  })
}

export const adminLogout = () => {
  return ajax({
    method: 'GET',
    url: 'http://localhost:3001/admin/logout',
    withCredentials: true
  })
}