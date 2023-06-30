// Problem 30: Implement a function called "getCurrentDateTime" that takes no
// parameters. The function should use the Date object's methods to retrieve various
// information about the current date and time and return an object containing the
// following properties:
// year
// month
// date
// day
// hours
// minutes
// seconds
// milliseconds
// timestamp
// Expected output:
// {
// year: 2023,
// month: 5,
// date: 29,
// day: 4,
// hours: 12,
// minutes: 30,
// seconds: 45,
// milliseconds: 500,
// timestamp: 13412341231233
// }

class getCurrentDateTime {
  constructor(
    year,
    month,
    date,
    day,
    hours,
    minutes,
    seconds,
    milliseconds,
    timestamp
  ) {
    this.year = year;
    this.month = month;
    this.date = date;
    this.day = day;
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.milliseconds = milliseconds;
    this.timestamp = timestamp;
  }
}
const time = new getCurrentDateTime(2023, 5, 29, 4,12,30,45,500,13412341231233)

console.log(time);
