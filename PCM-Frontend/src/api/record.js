import ajax from '@fdaciuk/ajax'

export const getRecord = function(roomNo, day) {
	return ajax({
	    method: 'GET',
	    url: `http://localhost:3001/record?roomNo=${roomNo}&date=${day}`,
	    withCredentials: true,
	})
}

export const applyRoom = (form) => {
  var request = ajax({
    headers: {
      'content-type': null
    },
    withCredentials: true
  })
  return request.post('http://localhost:3001/record', form)
}

export const approveRecord = (recordId, status) => {
  return ajax({
    method: 'POST',
    url: `http://localhost:3001/admin/record/${recordId}`,
    data: { status },
    withCredentials: true
  })
}

export const getAllRecord = () => {
  return ajax({
    method: 'GET',
    url: 'http://localhost:3001/admin/record',
    withCredentials: true
  })
}

export const getUserRecord = () => {
  return ajax({
    method: 'GET',
    url: 'http://localhost:3001/record',
    withCredentials: true
  })
}
