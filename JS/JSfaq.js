const qnToggle = document.querySelector('.qn');

const answerToggle = document.querySelector('.answer');

const expand = document.querySelector('.expand');

const contract = document.querySelector('.contract');

// const navBgColor = document.querySelector('#navbar')

qnToggle.addEventListener('click', doThat);

function doThat(){

  // button.style.color = 'blue';
  // dogLogo.style.backgroundColor = 'pink';
  // qnToggle.style.color = 'blue';
  // contract.style.display = "contents";


  if (answerToggle.style.display === "block") {
    answerToggle.style.display = "none";
  } else {
    answerToggle.style.display = "block";
  }

  if (expand.style.display === "none") {
    expand.style.display = "contents";
    contract.style.display = "none";
  } else {
    expand.style.display = "none";
    contract.style.display = "contents";
  }




  

  // if (dogLogo.style.display === "block") {
  //   dogLogo.style.display = "none";
  //   navBgColor.style.backgroundColor = 'transparent';
  // } else {
  //   dogLogo.style.display = "block";
  //   navBgColor.style.backgroundColor = '#F3F3F3';

  // }

  // if (ghostMenu.style.display === "block") {
  //   ghostMenu.style.display = "none";
  // } else {
  //   ghostMenu.style.display = "block";
  // }


}