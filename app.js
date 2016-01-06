var user = prompt('Tell me your name.');
console.log('The user\'s name is ' + user);

alert ('My name is Patrick, '+ user +', what do you know about me? Let\'s find out.');
alert ('Each questions is a yes or no question. Please answer only with a lower case y or n.');

var questionsRight = 0;

var answer1 = prompt('Patrick has more board games than he has played in the past year. y/n');
console.log('The user answered question 1: '+answer1);
if (answer1 === 'y' || answer1 === 'Y' || answer1 === 'yes' || answer1 === 'YES') {
  console.log('question 1 answered yes');
  alert('It\'s a pity but you\'re right, ' + user +', I don\'t play enough.');
  questionsRight++;
  console.log('number of questions right so far: '+questionsRight);
} else {
  console.log('question 1 answered no');
  alert('I\'m afraid you\'re wrong ' +user+'.');
}

var answer2 = prompt('Patrick\'s favorite drink is a Bloody Mary. y/n');
console.log('The user answered question 2: '+answer2);
if (answer2 === 'n' || answer2 === 'N' || answer2 === 'no' || answer2 === 'NO') {
  console.log('question 2 answered no');
  alert('Good guess, ' +user+', Patrick\'s favorite drink is a Corpse Reviver No.3.');
  questionsRight++;
  console.log('number of questions right so far: ' +questionsRight);
} else {
  console.log('question 2 answered yes');
  alert('Good guess, ' +user+', but Patrick\'s favorite drink is a Corpse Reviver No.3. No points this time.');
}

var answer3 = prompt('West coast best coast? y/n');
console.log('The user answered question 3: '+answer3);
if (answer3 === 'y' || answer3 === 'Y' || answer3 === 'yes' || answer3 === 'YES') {
  console.log('question 3 answered yes');
  alert('You know it, ' +user+'.');
  questionsRight++;
  console.log('number of questions right so far: ' + questionsRight);
} else {
  console.log('question 3 answered no');
  alert('You poor fool, ' +user+'.');
}

alert(user + ' got ' + questionsRight + ' questions right.');
