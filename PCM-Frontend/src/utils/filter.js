var getTime = (time) => {
  let t = time.split(':')
  return `${t[0]}:${t[1]}`
}

export const getDescString = (d) => {
  var roomNo = d.room.roomNo
  var date = d.date.slice(0, 10)
  var startTime = getTime(d.startTime)
  var endTime = getTime(d.endTime)
  return `${roomNo}/${date} ${startTime}~${endTime}`
}