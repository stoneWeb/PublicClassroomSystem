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