'use strict';

const onclick_sign_up = () => {
  const name = document.getElementById('sign_up_name').value;
  const bio = document.getElementById('sign_up_bio').value;
  const email = document.getElementById('sign_up_email').value;
  const password = document.getElementById('sign_up_password').value;
  const password_confirmation = document.getElementById('sign_up_password_confirmation').value;
  alert("onclick_sign_up()が呼ばれました" + name + bio + email + password + password_confirmation);
};