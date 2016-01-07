var user = prompt('Tell me your name.');
console.log('The user\'s name is ' + user);

alert ('My name is Patrick, ' + user + ', what do you know about me? Let\'s find out.');
alert ('The first three questions are yes or no questions. The last question asks you to guess a number');

var questionsRight = 0;

/* First question. yes or no */
var answer1 = prompt('Patrick has more board games than he has played in the past year. y/n');
console.log('The user answered question 1: '+ answer1);
if (answer1.toLowerCase() === 'y' || answer1.toLowerCase() === 'yes') {
  console.log('question 1 answered yes');
  alert('It\'s a pity but you\'re right, ' + user + ', I don\'t play enough.');
  questionsRight ++;
  console.log('number of questions right so far: ' + questionsRight);
} else {
  console.log('question 1 answered no');
  alert('I\'m afraid you\'re wrong ' + user + '.');
}

/* Second question, yes or no */
var answer2 = prompt('Patrick\'s favorite drink is a Bloody Mary. y/n');
console.log('The user answered question 2: ' + answer2);
if (answer2.toLowerCase() === 'n' || answer2.toLowerCase() === 'no') {
  console.log('question 2 answered no');
  alert('Good guess, ' + user + ', Patrick\'s favorite drink is a Corpse Reviver No.3.');
  questionsRight++;
  console.log('number of questions right so far: ' +questionsRight);
} else {
  console.log('question 2 answered yes');
  alert('Good guess, ' + user + ', but Patrick\'s favorite drink is a Corpse Reviver No.3. No points this time.');
}

/* Third question, yes or no */
var answer3 = prompt('West coast best coast? y/n');
console.log('The user answered question 3: '+answer3);
if (answer3.toLowerCase() === 'y' || answer3.toLowerCase() === 'yes') {
  console.log('question 3 answered yes');
  alert('You know it, ' + user + '.');
  questionsRight++;
  console.log('number of questions right so far: ' + questionsRight);
} else {
  console.log('question 3 answered no');
  alert('You poor fool, ' + user + '.');
}

/* Fourth question, loops until the user guesses right, gives a hint each time */
do {
  console.log('dowhile loop');
  var rightYet = false;
  var answer4 = prompt('One last question ' + user + '. What number am I thinking of? I\'ll give you a hint. It\'s between 1 and 10.');
  if (answer4 == 4) {
    console.log('just right');
    alert('DING DING DING! Got it!');
    questionsRight++;
    rightYet = true;
  }
  else if (answer4 < 4) {
    alert('Too low, try again ' + user + '.');
    console.log('too low');
  }
  else if (answer4 > 4) {
    alert('Too high, try again ' + user + '.');
    console.log('too high');
  }
  else {
    alert('I\'m just a dumb computer. Please give your answer as a numeral.')
  }
} while (rightYet !== true );

/* Tells the user how many questions he or she got right */
alert('You got ' + questionsRight + ' question right ' + user + '.');
