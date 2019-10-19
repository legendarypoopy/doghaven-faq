// =====================================================================================================
// ANSWER 1 (below) is the only different format from the rest because the answer is displayed on screen
// =====================================================================================================

var qnToggle1 = document.querySelector('.qn1');
var answerToggle1 = document.querySelector('.answer1');
var expand1 = document.querySelector('.expand1');
var contract1 = document.querySelector('.contract1');

// const navBgColor = document.querySelector('#navbar')

// var counterQn = [qnToggle1, qnToggle2, qnToggle3];
// console.log(counterQn.length);

qnToggle1.addEventListener('click', toggleAnswer1);

function toggleAnswer1(){

  // button.style.color = 'blue';
  // dogLogo.style.backgroundColor = 'pink';
  // qnToggle.style.color = 'blue';
  // contract.style.display = "contents";


  // Answer 1 is exception case because it is slightly different from the rest (answer already displayed on screen)
  if (answerToggle1.style.display === "none") {
    answerToggle1.style.display = "block";
  } else {
    answerToggle1.style.display = "none";
  }

  if (expand1.style.display === "contents") {
    expand1.style.display = "none";
    contract1.style.display = "contents";
  } else {
    expand1.style.display = "contents";
    contract1.style.display = "none";
  }
}



// =========================================================================================
// ANSWER 2 onwards (below) are all the same format because the answer is hiddened on screen
// =========================================================================================

var qnToggle2 = document.querySelector('.qn2');
var answerToggle2 = document.querySelector('.answer2');
var expand2 = document.querySelector('.expand2');
var contract2 = document.querySelector('.contract2');

qnToggle2.addEventListener('click', toggleAnswer2);

function toggleAnswer2(){

  if (answerToggle2.style.display === "block") {
    answerToggle2.style.display = "none";
  } else {
    answerToggle2.style.display = "block";
  }

  if (expand2.style.display === "none") {
    expand2.style.display = "contents";
    contract2.style.display = "none";
  } else {
    expand2.style.display = "none";
    contract2.style.display = "contents";
  }
}


var qnToggle3 = document.querySelector('.qn3');
var answerToggle3 = document.querySelector('.answer3');
var expand3 = document.querySelector('.expand3');
var contract3 = document.querySelector('.contract3');

qnToggle3.addEventListener('click', toggleAnswer3);

function toggleAnswer3(){

  if (answerToggle3.style.display === "block") {
    answerToggle3.style.display = "none";
  } else {
    answerToggle3.style.display = "block";
  }

  if (expand3.style.display === "none") {
    expand3.style.display = "contents";
    contract3.style.display = "none";
  } else {
    expand3.style.display = "none";
    contract3.style.display = "contents";
  }
}


var qnToggle4 = document.querySelector('.qn4');
var answerToggle4 = document.querySelector('.answer4');
var expand4 = document.querySelector('.expand4');
var contract4 = document.querySelector('.contract4');

qnToggle4.addEventListener('click', toggleAnswer4);

function toggleAnswer4(){

  if (answerToggle4.style.display === "block") {
    answerToggle4.style.display = "none";
  } else {
    answerToggle4.style.display = "block";
  }

  if (expand4.style.display === "none") {
    expand4.style.display = "contents";
    contract4.style.display = "none";
  } else {
    expand4.style.display = "none";
    contract4.style.display = "contents";
  }
}


var qnToggle5 = document.querySelector('.qn5');
var answerToggle5 = document.querySelector('.answer5');
var expand5 = document.querySelector('.expand5');
var contract5 = document.querySelector('.contract5');

qnToggle5.addEventListener('click', toggleAnswer5);

function toggleAnswer5(){

  if (answerToggle5.style.display === "block") {
    answerToggle5.style.display = "none";
  } else {
    answerToggle5.style.display = "block";
  }

  if (expand5.style.display === "none") {
    expand5.style.display = "contents";
    contract5.style.display = "none";
  } else {
    expand5.style.display = "none";
    contract5.style.display = "contents";
  }
}


var qnToggle6 = document.querySelector('.qn6');
var answerToggle6 = document.querySelector('.answer6');
var expand6 = document.querySelector('.expand6');
var contract6 = document.querySelector('.contract6');

qnToggle6.addEventListener('click', toggleAnswer6);

function toggleAnswer6(){

  if (answerToggle6.style.display === "block") {
    answerToggle6.style.display = "none";
  } else {
    answerToggle6.style.display = "block";
  }

  if (expand6.style.display === "none") {
    expand6.style.display = "contents";
    contract6.style.display = "none";
  } else {
    expand6.style.display = "none";
    contract6.style.display = "contents";
  }
}


var qnToggle7 = document.querySelector('.qn7');
var answerToggle7 = document.querySelector('.answer7');
var expand7 = document.querySelector('.expand7');
var contract7 = document.querySelector('.contract7');

qnToggle7.addEventListener('click', toggleAnswer7);

function toggleAnswer7(){

  if (answerToggle7.style.display === "block") {
    answerToggle7.style.display = "none";
  } else {
    answerToggle7.style.display = "block";
  }

  if (expand7.style.display === "none") {
    expand7.style.display = "contents";
    contract7.style.display = "none";
  } else {
    expand7.style.display = "none";
    contract7.style.display = "contents";
  }
}


var qnToggle8 = document.querySelector('.qn8');
var answerToggle8 = document.querySelector('.answer8');
var expand8 = document.querySelector('.expand8');
var contract8 = document.querySelector('.contract8');

qnToggle8.addEventListener('click', toggleAnswer8);

function toggleAnswer8(){

  if (answerToggle8.style.display === "block") {
    answerToggle8.style.display = "none";
  } else {
    answerToggle8.style.display = "block";
  }

  if (expand8.style.display === "none") {
    expand8.style.display = "contents";
    contract8.style.display = "none";
  } else {
    expand8.style.display = "none";
    contract8.style.display = "contents";
  }
}


var qnToggle9 = document.querySelector('.qn9');
var answerToggle9 = document.querySelector('.answer9');
var expand9 = document.querySelector('.expand9');
var contract9 = document.querySelector('.contract9');

qnToggle9.addEventListener('click', toggleAnswer9);

function toggleAnswer9(){

  if (answerToggle9.style.display === "block") {
    answerToggle9.style.display = "none";
  } else {
    answerToggle9.style.display = "block";
  }

  if (expand9.style.display === "none") {
    expand9.style.display = "contents";
    contract9.style.display = "none";
  } else {
    expand9.style.display = "none";
    contract9.style.display = "contents";
  }
}


var qnToggle10 = document.querySelector('.qn10');
var answerToggle10 = document.querySelector('.answer10');
var expand10 = document.querySelector('.expand10');
var contract10 = document.querySelector('.contract10');

qnToggle10.addEventListener('click', toggleAnswer10);

function toggleAnswer10(){

  if (answerToggle10.style.display === "block") {
    answerToggle10.style.display = "none";
  } else {
    answerToggle10.style.display = "block";
  }

  if (expand10.style.display === "none") {
    expand10.style.display = "contents";
    contract10.style.display = "none";
  } else {
    expand10.style.display = "none";
    contract10.style.display = "contents";
  }
}


var qnToggle11 = document.querySelector('.qn11');
var answerToggle11 = document.querySelector('.answer11');
var expand11 = document.querySelector('.expand11');
var contract11 = document.querySelector('.contract11');

qnToggle11.addEventListener('click', toggleAnswer11);

function toggleAnswer11(){

  if (answerToggle11.style.display === "block") {
    answerToggle11.style.display = "none";
  } else {
    answerToggle11.style.display = "block";
  }

  if (expand11.style.display === "none") {
    expand11.style.display = "contents";
    contract11.style.display = "none";
  } else {
    expand11.style.display = "none";
    contract11.style.display = "contents";
  }
}


var qnToggle12 = document.querySelector('.qn12');
var answerToggle12 = document.querySelector('.answer12');
var expand12 = document.querySelector('.expand12');
var contract12 = document.querySelector('.contract12');
var imageDog = document.querySelector('.matted_dog');
var titleDog = document.querySelector('.matted_dog_title');


qnToggle12.addEventListener('click', toggleAnswer12);

function toggleAnswer12(){

  if (answerToggle12.style.display === "block") {
    answerToggle12.style.display = "none";
  } else {
    answerToggle12.style.display = "block";
  }

  if (expand12.style.display === "none") {
    expand12.style.display = "contents";
    contract12.style.display = "none";
  } else {
    expand12.style.display = "none";
    contract12.style.display = "contents";
  }

  if (imageDog.style.display === "block") {
    imageDog.style.display = "none";
  } else {
    imageDog.style.display = "block";
  }

  if (titleDog.style.display === "block") {
    titleDog.style.display = "none";
  } else {
    titleDog.style.display = "block";
  }
}


var qnToggle13 = document.querySelector('.qn13');
var answerToggle13 = document.querySelector('.answer13');
var expand13 = document.querySelector('.expand13');
var contract13 = document.querySelector('.contract13');
var imageNails = document.querySelector('.nails');
var titleNails = document.querySelector('.nails_title');

qnToggle13.addEventListener('click', toggleAnswer13);

function toggleAnswer13(){

  if (answerToggle13.style.display === "block") {
    answerToggle13.style.display = "none";
  } else {
    answerToggle13.style.display = "block";
  }

  if (expand13.style.display === "none") {
    expand13.style.display = "contents";
    contract13.style.display = "none";
  } else {
    expand13.style.display = "none";
    contract13.style.display = "contents";
  }

  if (imageNails.style.display === "block") {
    imageNails.style.display = "none";
  } else {
    imageNails.style.display = "block";
  }

  if (titleNails.style.display === "block") {
    titleNails.style.display = "none";
  } else {
    titleNails.style.display = "block";
  }
}


var qnToggle14 = document.querySelector('.qn14');
var answerToggle14 = document.querySelector('.answer14');
var expand14 = document.querySelector('.expand14');
var contract14 = document.querySelector('.contract14');
var imageAnalGland = document.querySelector('.anal_gland');
var titleAnalGland = document.querySelector('.anal_gland_title');

qnToggle14.addEventListener('click', toggleAnswer14);

function toggleAnswer14(){

  if (answerToggle14.style.display === "block") {
    answerToggle14.style.display = "none";
  } else {
    answerToggle14.style.display = "block";
  }

  if (expand14.style.display === "none") {
    expand14.style.display = "contents";
    contract14.style.display = "none";
  } else {
    expand14.style.display = "none";
    contract14.style.display = "contents";
  }

  if (imageAnalGland.style.display === "block") {
    imageAnalGland.style.display = "none";
  } else {
    imageAnalGland.style.display = "block";
  }

  if (titleAnalGland.style.display === "block") {
    titleAnalGland.style.display = "none";
  } else {
    titleAnalGland.style.display = "block";
  }
}


var qnToggle15 = document.querySelector('.qn15');
var answerToggle15 = document.querySelector('.answer15');
var expand15 = document.querySelector('.expand15');
var contract15 = document.querySelector('.contract15');

qnToggle15.addEventListener('click', toggleAnswer15);

function toggleAnswer15(){

  if (answerToggle15.style.display === "block") {
    answerToggle15.style.display = "none";
  } else {
    answerToggle15.style.display = "block";
  }

  if (expand15.style.display === "none") {
    expand15.style.display = "contents";
    contract15.style.display = "none";
  } else {
    expand15.style.display = "none";
    contract15.style.display = "contents";
  }
}









// const qnToggle3 = document.querySelector('.qn3');



//   if (dogLogo.style.display === "block") {
//     dogLogo.style.display = "none";
//     navBgColor.style.backgroundColor = 'transparent';
//   } else {
//     dogLogo.style.display = "block";
//     navBgColor.style.backgroundColor = '#F3F3F3';

//   }

//   if (ghostMenu.style.display === "block") {
//     ghostMenu.style.display = "none";
//   } else {
//     ghostMenu.style.display = "block";
//   }


