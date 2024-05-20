'use strict  ';
/////////// Selecting Elements ////////////
const messagesContainer = document.querySelector('.messages');
const btn = document.querySelector('.btn');
const input = document.querySelector('.textInput');

////////////// Function/////////////////
const revealMessage = function () {
  // create "li" element
  const message = document.createElement('li');
  message.setAttribute('class', 'message');

  if (input.value === '') {
    alert('Please Enter A Valid Value ');
  } else {
    let text = input.value;
    message.textContent = text;
    messagesContainer.appendChild(message);
    input.value = '';
    input.focus();
  }
};

btn.addEventListener('click', revealMessage);
