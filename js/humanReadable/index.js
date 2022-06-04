function humanReadable(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds - hours * 3600) / 60);
  let reseconds = (seconds - hours * 3600) % 60;
  if (hours.toString().length == 1) {
    hours = "0" + hours;
  }
  if (minutes.toString().length == 1) {
    minutes = "0" + minutes;
  }
  if (reseconds.toString().length == 1) {
    reseconds = "0" + reseconds;
  }
  let time = hours + ":" + minutes + ":" + reseconds;
  return time;
}

console.log(humanReadable(59));
