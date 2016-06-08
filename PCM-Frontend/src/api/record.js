import ajax from '@fdaciuk/ajax'

export const getRecord = function(roomNo, day) {
	return ajax({
	    method: 'GET',
	    url: `http://localhost:3001/record?roomNo=${roomNo}&date=${day}`,
	    withCredentials: true,
	})
}