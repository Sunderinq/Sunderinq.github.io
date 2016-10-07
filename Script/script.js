var today = new Date();
var hourNow = tpday.getHours();
var greeting;

if (hourNow > 18) {
  greeting = ' Good Evening!';
  } else if (hourNow > 12) {
  greeting = ' Good afternoon!';
  } else if (hourNow > 0){
  greeting = ' Welcome!';
  }
