export const HMStoMilliseconds = (hours, minutes, seconds) => {
  const hoursToMinutes    = hours * 60;
  const minutesToSeconds  = (hoursToMinutes + minutes) * 60;
  const milliseconds      = (minutesToSeconds + seconds) * 1000;
  return milliseconds;
};
    
export const millisecondsToHMS = milliseconds => {
  // to round the ms value, otherwise when a h, m, or s hits, zero, timer behaves weirdly
  const normalizedSeconds = Math.ceil(milliseconds / 1000);
  let hours   = parseInt(normalizedSeconds / 60 / 60, 10);
  let minutes = parseInt((normalizedSeconds / 60) % 60, 10);
  let seconds = Math.floor((normalizedSeconds) % 60);
  hours   = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  return (`${hours}:${minutes}:${seconds}`);
};