var res1 = document.getElementById('resultOne');
var res2 = document.getElementById('resultTwo');
var res3 = document.getElementById('resultThree');
var res4 = document.getElementById('resultFour');
var res5 = document.getElementById('resultFive');
var res6 = document.getElementById('correctCounter')

var user = prompt('Tell me your name.');
console.log('The user\'s name is ' + user);

alert ('My name is Patrick, ' + user + ', what do you know about me? Let\'s find out.');
var questionsRight = 0;

/* First question. yes or no */
function questionOne() {
  var answer1 = prompt('Patrick has more board games than he has played in the past year. y/n');
console.log('The user answered question 1: '+ answer1);
if (answer1.toLowerCase() === 'y' || answer1.toLowerCase() === 'yes') {
  console.log('question 1 answered yes');
  res1.textContent = 'It\'s a pity but you\'re right, ' + user + ', I don\'t play enough.';
  // alert('It\'s a pity but you\'re right, ' + user + ', I don\'t play enough.');
  questionsRight ++;
  console.log('number of questions right so far: ' + questionsRight);
} else {
  console.log('question 1 answered no');
  // alert('I\'m afraid you\'re wrong ' + user + '.');
  res1.textContent = 'I\'m afraid you\'re wrong ' + user + '.';
}
}

/* Second question, yes or no */
function questionTwo(){
  var answer2 = prompt('Patrick\'s favorite drink is a Bloody Mary. y/n');
console.log('The user answered question 2: ' + answer2);
if (answer2.toLowerCase() === 'n' || answer2.toLowerCase() === 'no') {
  console.log('question 2 answered no');
  // alert('Good guess, ' + user + ', Patrick\'s favorite drink is a Corpse Reviver No.3.');
  res2.textContent = 'Good guess, ' + user + ', Patrick\'s favorite drink is a Corpse Reviver No.3.';
  questionsRight++;
  console.log('number of questions right so far: ' +questionsRight);
} else {
  console.log('question 2 answered yes');
  // alert('Good guess, ' + user + ', but Patrick\'s favorite drink is a Corpse Reviver No.3. No points this time.');
  res2.textContent = 'Good guess, ' + user + ', but Patrick\'s favorite drink is a Corpse Reviver No.3. No points this time.';
}
}

/* Third question, yes or no */
function questionThree() {
  var answer3 = prompt('West coast best coast? y/n');
console.log('The user answered question 3: '+answer3);
if (answer3.toLowerCase() === 'y' || answer3.toLowerCase() === 'yes') {
  console.log('question 3 answered yes');
  // alert('You know it, ' + user + '.');
  res3.textContent = 'You know it, ' + user + '.';
  questionsRight++;
  console.log('number of questions right so far: ' + questionsRight);
} else {
  console.log('question 3 answered no');
  // alert('You poor fool, ' + user + '.');
  res3.textContent = 'You poor fool, ' + user + '.';
}
}

//fourth question, using numbers instead of strings
function questionFour() {
  var answer4 = prompt('Guess a number betwee one and 10. You only get one try.');
console.log('The user answered question 4: '+answer4);
if (answer4 === '3') {
  console.log('question 4 answered right');
  // alert('You know it, ' + user + '.');
  res4.textContent = 'You know it, ' + user + '.';
  questionsRight++;
  console.log('number of questions right so far: ' + questionsRight);
} else {
  console.log('question 4 answered wrong');
  // alert('You poor fool, ' + user + '.');
  res4.textContent = 'Wrong, ' + user + '.';
}
}

/* Fifth question, loops until the user guesses right, gives a hint each time */
function questionFive() {
  do {
  console.log('dowhile loop');
  var rightYet = false;
  var answer5 = prompt('One last question ' + user + '. What number am I thinking of? I\'ll give you a hint. It\'s between 1 and 10.');
  if (answer5 == 4) {
    console.log('just right');
    // alert('DING DING DING! Got it!');
    res5.textContent = 'DING DING DING! Got it!';
    questionsRight++;
    rightYet = true;
  }
  else if (answer5 < 4) {
    // alert('Too low, try again ' + user + '.');
    console.log('too low');
    res5.textContent = 'Too low, try again ' + user + '.';
  }
  else if (answer5 > 4) {
    // alert('Too high, try again ' + user + '.');
    res5.textContent = 'Too high, try again ' + user + '.';
    console.log('too high');
  }
  else {
  // alert('I\'m just a dumb computer. Please give your answer as a numeral.')
  res5.textContent = 'I\'m just a dumb computer. Please give your answer as a numeral.';
  }
} while (rightYet !== true );
}


/* Tells the user how many questions he or she got right */
function numberRight(){
  res6.textContent = 'You got ' + questionsRight + ' question right ' + user + '.';
}

questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
numberRight();
