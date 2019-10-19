var qnToggle1 = document.querySelector('.qn1');
var answerToggle1 = document.querySelector('.answer1');
var expand1 = document.querySelector('.expand1');
var contract1 = document.querySelector('.contract1');

// const navBgColor = document.querySelector('#navbar')

// var counterQn = [qnToggle1, qnToggle2, qnToggle3];
// console.log(counterQn.length);

qnToggle1.addEventListener('click', doMagic1);

function doMagic1(){

  // button.style.color = 'blue';
  // dogLogo.style.backgroundColor = 'pink';
  // qnToggle.style.color = 'blue';
  // contract.style.display = "contents";


  if (answerToggle1.style.display === "block") {
    answerToggle1.style.display = "none";
  } else {
    answerToggle1.style.display = "block";
  }

  if (expand1.style.display === "none") {
    expand1.style.display = "contents";
    contract1.style.display = "none";
  } else {
    expand1.style.display = "none";
    contract1.style.display = "contents";
  }
}

var qnToggle2 = document.querySelector('.qn2');
var answerToggle2 = document.querySelector('.answer2');
var expand2 = document.querySelector('.expand2');
var contract2 = document.querySelector('.contract2');

qnToggle2.addEventListener('click', doMagic2);

function doMagic2(){

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


