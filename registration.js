// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const cpassword = document.getElementById('cpassword');
// const phone = document.getElementById('phone');

// const errorUsername = document.getElementById('errorUsername');
// const errorEmail = document.getElementById('errorEmail');
// const errorPhone = document.getElementById('errorPhone');
// const errorPassword = document.getElementById('errorPassword');
// const errorCPassword = document.getElementById('errorCPassword');

// // USERNAME
// const isValidUsername = (username) => {
//   const regex = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
//   return username.match(regex);
// };

// username.addEventListener('input', (e) => {
//   if (username.value == '') {
//     errorUsername.innerHTML = 'Username is required';
//   } else if (!isValidUsername(username.value)) {
//     errorUsername.innerHTML =
//       'Provide a valid username having alphanumeric values.';
//   } else {
//     errorUsername.innerHTML = '';
//   }
// });

// // EMAIL
// const isValidEmail = (email) => {
//   const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//   return email.match(regex);
// };

// email.addEventListener('input', (e) => {
//   if (email.value == '') {
//     errorEmail.innerHTML = 'Email is required';
//   } else if (!isValidEmail(email.value)) {
//     errorEmail.innerHTML = 'Provide a valid email address.';
//   } else {
//     errorEmail.innerHTML = '';
//   }
// });

// // PHONE
// const isValidPhone = (phone) => {
//   const regexPhone = /^[0-9]{10}$/;
//   return phone.match(regexPhone);
// };

// phone.addEventListener('input', (e) => {
//   if (phone.value == '') {
//     errorPhone.innerHTML = 'Phone number is required';
//   } else if (!isValidPhone(phone.value)) {
//     errorPhone.innerHTML = 'Provide a valid phone number.';
//   } else {
//     errorPhone.innerHTML = '';
//   }
// });

// // PASSWORD
// const isValidPassword = (password) => {
//   var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,20}$/;
//   return password.match(regex);
// };

// password.addEventListener('input', (e) => {
//   if (password.value == '') {
//     errorPassword.innerHTML = 'Password is required';
//   } else if (!isValidPassword(password.value)) {
//     errorPassword.innerHTML =
//       'Password must be of at least 8 characters that include at least 1 lowercase, 1 uppercase, 1 special character and 1 number';
//   } else {
//     errorPassword.innerHTML = '';
//   }
// });

// // CONFIRM PASSWORD
// cpassword.addEventListener('input', (e) => {
//   if (cpassword.value == '') {
//     errorCPassword.innerHTML = 'Please confirm your password.';
//   } else if (cpassword.value != password.value) {
//     errorCPassword.innerHTML = 'Passwords does not match.';
//   } else {
//     errorCPassword.innerHTML = '';
//   }
// });

// const form = document.getElementById('form');
// form.addEventListener('submit', (e) => {
//   e.preventDefault();
// });
