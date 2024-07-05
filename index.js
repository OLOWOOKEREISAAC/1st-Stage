const d = new Date();
const day = d.getUTCDay();
const time = 'UTC Time: '+d.getUTCHours() + ':' + d.getUTCMinutes();

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

let timePlaceholder = document.querySelector('[data-testid="currentTimeUTC"]');
timePlaceholder.innerHTML = time;
 

let dayPlaceHolder = document.querySelector('[data-testid="currentDay"]');
dayPlaceHolder.innerHTML = 'Day: ' + weekdays[day];

