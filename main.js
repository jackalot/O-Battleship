/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function validateForm() {\n  function validateEmail() {\n    const email = document.querySelector('.email');\n    if (!email.checkValidity()) {\n      document.querySelector('.email-error').textContent = email.validationMessage;\n      return false;\n    }\n    document.querySelector('.email-error').textContent = '';\n    return true;\n  }\n  function validateCountry() {\n    const country = document.querySelector('.country');\n    console.log(country.value);\n    if (!country.checkValidity()) {\n      document.querySelector('.country-error').textContent = country.validationMessage;\n      return false;\n    }\n    if (country.value === 'unitedstates' || country.value === 'united states') {\n      document.querySelector('.country-error').textContent = '';\n      return true;\n    }\n    if (country.value !== 'unitedstates' || country.value !== 'united states') {\n      //    just one country for the sake of simplicity, in an actual form, this would be a for loop\n      //    testing our input against the loop variables.\n      //    I.E: if(country.value.toLowerCase() === countries[i])\n      document.querySelector('.country-error').textContent = 'enter a valid country(only the united states is valid)';\n      //    country.setCustomValidity('enter a valid country(only the united states is valid)');\n      return false;\n    }\n  }\n  function validateZipCode() {\n    const zipCode = document.querySelector('.zip-code');\n    if (zipCode.validity.rangeUnderflow) {\n      document.querySelector('.zip-code-error').textContent = zipCode.validationMessage;\n      return false;\n    } if (zipCode.validity.rangeOverflow) {\n      document.querySelector('.zip-code-error').textContent = zipCode.validationMessage;\n      return false;\n    }\n    if (!zipCode.checkValidity()) {\n      document.querySelector('.zip-code-error').textContent = zipCode.validationMessage;\n      return false;\n    }\n    document.querySelector('.zip-code-error').textContent = '';\n    return true;\n  }\n  function validatePassword() {\n    const password = document.querySelector('.password');\n    if (!password.checkValidity()) {\n      document.querySelector('.password-error').textContent = password.validationMessage;\n      return false;\n    }\n    if (password.validity.rangeUnderflow) {\n      document.querySelector('.password-error').textContent = password.validationMessage;\n      return false;\n    }\n    document.querySelector('.password-error').textContent = '';\n    return true;\n  }\n  function validateConfirmPassword() {\n    const confirmPassword = document.querySelector('.confirm-password');\n    if (!confirmPassword.checkValidity()) {\n      document.querySelector('.confirm-password-error').textContent = confirmPassword.validationMessage;\n      return false;\n    }\n    if (confirmPassword.validity.rangeUnderflow) {\n      document.querySelector('.confirm-password-error').textContent = confirmPassword.validationMessage;\n      return false;\n    }\n    const password = document.querySelector('.password');\n    if (confirmPassword.value !== password.value) {\n      document.querySelector('.confirm-password-error').textContent = 'These passwords do not match';\n      return false;\n    }\n    document.querySelector('.confirm-password-error').textContent = '';\n    return true;\n  }\n  const submit = document.querySelector('.submit');\n  const inputElements = document.querySelectorAll('input');\n  inputElements.forEach((element) => {\n    element.addEventListener('click', () => {\n      if (element.className === 'email') {\n        validateCountry();\n      }\n      if (element.className === 'country') {\n        validateEmail();\n        validateZipCode();\n      }\n      if (element.className === 'zip-code') {\n        validateCountry();\n        validatePassword();\n      }\n      if (element.className === 'password') {\n        validateZipCode();\n        validateConfirmPassword();\n      }\n      if (element.className === 'confirm-password') {\n        validatePassword();\n        validateConfirmPassword();\n      }\n    });\n  });\n  submit.addEventListener('click', () => {\n    console.log('click');\n    const email = validateEmail();\n    const country = validateCountry();\n    const zipCode = validateZipCode();\n    const password = validatePassword();\n    const confirmPassword = validateConfirmPassword();\n    if (email === true && country === true && zipCode === true\n       && password === true && confirmPassword === true) {\n      document.querySelector('.high-five').textContent = 'all fields are valid, here have a high five: high five!';\n    }\n  });\n}\nvalidateForm();\n\n\n//# sourceURL=webpack://O-Forms-Practice/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;