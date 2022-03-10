window.onload = function () {
  const houseLogo = document.getElementById('houseSelector');
  const selectHouse = document.getElementById('choosenHouse');
  const form = document.getElementById('signUpForm');
  const sendButton = document.getElementById('btnId');
}

const houseLogo = document.getElementById('houseSelector');
const selectHouse = document.getElementById('choosenHouse');
function houseApplier(event) {
  const target = event.target;
  if (target.classList[0] === 'houseLogo') {
    document.getElementById('house').style.display = 'none';
    document.getElementById('signUpForm').style.display = 'flex';
    selectHouse.value = target.id;
    if (target.id === 'Gryffindor') {
      document.body.style.backgroundImage = "url('./images/gryffindor.jpg')";
    }
    if (target.id === 'Hufflepuff') {
      document.body.style.backgroundImage = "url('./images/hufflepuff.jpg')";
    }
    if (target.id === 'Ravenclaw') {
      document.body.style.backgroundImage = "url('./images/ravenclaw.jpg')";
    }
    if (target.id === 'Slytherin') {
      document.body.style.backgroundImage = "url('./images/slytherin.jpg')";
    }
  }
}
houseLogo.addEventListener('click', houseApplier);

const checkBox = document.getElementById('agreement');
const submit = document.getElementById('submitBtn');

function checkChange() {
  if (checkBox.checked === false) {
    submit.disabled = true;
  } else {
    submit.disabled = false;
  }
}
checkBox.addEventListener('click', checkChange);

const text = document.getElementById('textArea');
const character = document.getElementById('counter');
function charCounter() {
  const val = text.value;
  character.innerHTML = 500 - val.length;
}
text.addEventListener('keyup', charCounter);

const btn = document.querySelector('#submitBtn');
function formHide() {
  document.querySelector('#form').style.display = 'none';
  document.querySelector('#player').style.display = 'none';
  document.querySelector('#review').style.display = 'flex';
}

btn.addEventListener('click', formHide);

const review = document.getElementById('reviewInfo');


function captureName() {
  const reviewText = 'Hey, please review your informations so we can inform Dementors.';
  const message = document.createElement('h4');
  messageSon = review.appendChild(message);
  messageSon.innerText = reviewText;

  const last = document.querySelector('#inputLastName').value;
  const nome = document.querySelector('#inputName').value;
  const fullName = `Name: ${nome} ${last}`;
  const paragraph = document.createElement('p');
  const son = review.appendChild(paragraph);
  son.id = 'fullName';
  son.innerText = fullName;
}

const reviewMail = document.querySelector('#inputEmail');
function captureMail() {
  const mail = `Email: ${reviewMail.value}`;
  const paragraph = document.createElement('p');
  const son = review.appendChild(paragraph);
  son.innerText = mail;
}

const selectedHouse = document.querySelector('#choosenHouse');
function captureHouse() {
  const house = `House: ${selectedHouse.value}`;
  const paragraph = document.createElement('p');
  const son = review.appendChild(paragraph);
  son.innerText = house;
}

const selectedFamily = document.querySelectorAll('.wizardry');
function captureWizardry() {
  const paragraph = document.createElement('p');
  const son = review.appendChild(paragraph);
  for (let index = 0; index < selectedFamily.length; index += 1) {
    if (selectedFamily[index].checked) {
      const blood = selectedFamily[index].value;
      son.innerText = `Wizzardry Filiation: ${blood}`;
    }
  }
}

const selectedSpells = document.querySelectorAll('.spell');
function captureSpells() {
  const paragraph = document.createElement('p');
  const son = review.appendChild(paragraph);
  son.innerText = 'Learned Spells: ';
  for (let index = 0; index < selectedSpells.length; index += 1) {
    if (selectedSpells[index].checked) {
      son.innerText += ` ${selectedSpells[index].value},`;
    }
  }
}

const writtenObs = document.querySelector('#textArea');

function captureObs() {
  const obs = `Comment: ${writtenObs.value}`;
  const paragraph = document.createElement('p');
  const son = review.appendChild(paragraph);
  son.innerText = obs;
}

function defaultpreventer(event) {
  event.preventDefault();
  captureName();
  captureMail();
  captureHouse();
  captureWizardry();
  captureSpells();
  captureObs();
}
submit.addEventListener('click', defaultpreventer);

const reviewSubmit = document.getElementById('reviewBtn');
function preventer(event) {
  event.preventDefault();

  document.getElementById('finalMessage').style.display = 'flex';
  document.getElementById('signUpForm').style.display = 'none';

  let answer = '';
  const name = document.getElementById('fullName').innerText;

  if (name.match(/Name: Ronald Weasley/i) || name.match(/Name: Ron Weasley/i) || name.match(/Name: Rony Weasley/i) || name.match(/Name: Ronald Bilius Weasley/i)) {
    answer = 'Sorry, all owls are busy rigth now. You can ask Scabbers to delivery your sign up form on paper.';
    document.getElementById('message').innerHTML = answer;
  }
  if (name.match(/Name: Hermione Jean Granger/i) || name.match(/Name: Hermione Granger/i)) {
    answer = 'Sorry, all owls are busy rigth now. You can ask Crookshanks to delivery your sign up form on paper.';
    document.getElementById('message').innerHTML = answer;
  }
  if (name.match(/Neville Longbottom/i)) {
    answer = 'Sorry, all owls are busy rigth now. You can ask Trevor to delivery your sign up form on paper.';
    document.getElementById('message').innerHTML = answer;
  }
  if (name.match(/Name: Harry Potter/i) || name.match(/Name: Harry James Potter/i)) {
    answer = 'Sorry, You can not be Ms. Potter. He has already signed up as a player.';
    document.getElementById('message').innerHTML = answer;
  }
}
reviewSubmit.addEventListener('click', preventer)

