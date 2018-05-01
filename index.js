// Practice Tracker
const practiceData = require('./data.json');

const goal = practiceData.goal;
const sessions = practiceData.sessions;


console.log('\nThe goal is to practice painting for 1,000 hours.\nLet\'s see how it\'s going:\n');
const hours = sessions.reduce((total, session) => total + session.hours, 0);
console.log('> ' + hours + ' hours of practice were logged, in '+ sessions.length +' sessions.');

if (hours < goal) {
  const percentage = Math.round(hours/goal * 100);
  console.log('> You are ' + percentage + '% of the way to your goal. Keep it up!\n');
}
