'use strict';

const onclick_sign_up = () => {
  const name = document.getElementById('sign_up_name').value;
  const bio = document.getElementById('sign_up_bio').value;
  const email = document.getElementById('sign_up_email').value;
  const password = document.getElementById('sign_up_password').value;
  const password_confirmation = document.getElementById('sign_up_password_confirmation').value;
  const url = 'https://teachapi.herokuapp.com/sign_up';
  const data = {
    sign_up_user_params: {
      name,
      bio,
      email,
      password,
      password_confirmation,
    }
  };
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(json => {
      console.log(json);
    });
};