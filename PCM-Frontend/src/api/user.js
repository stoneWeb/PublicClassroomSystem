import ajax from '@fdaciuk/ajax'

export const signup = (email, name, password) => {
  return ajax({
    method: 'POST',
    url: 'http://localhost:3001/register',
    withCredentials: true,
    data: {
      email,
      name,
      password
    }
  })
}

export const login = (email, password) => {
  return ajax({
    method: 'POST',
    url: 'http://localhost:3001/login',
    withCredentials: true,
    data: {
      email,
      password
    }
  })
}