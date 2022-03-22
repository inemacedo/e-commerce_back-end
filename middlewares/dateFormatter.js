const { format } = require("date-fns");
const minute = 60000;
const hour = 60 * minute;
const day = 24 * hour;

module.exports = function(tweetDate) {
  const tweetAge = Date.now() - tweetDate;
  if (tweetAge > day) {
    const date = format(tweetDate, "MMM' 'd");
    return date;
  }
  if (tweetAge > hour) {
    const hours = Math.floor(tweetAge / hour);
    return hours + "h";
  }
  if (tweetAge > minute) {
    const minutes = Math.floor(tweetAge / minute);
    return minutes + "m";
  }
  const seconds = Math.floor(tweetAge / 1000);
  return seconds + "s";
};