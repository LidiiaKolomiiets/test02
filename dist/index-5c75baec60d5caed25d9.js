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

/***/ "./client/index.js":
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
/***/ (() => {

eval("const questions = [];\r\n\r\nfunction fetchQuest() {\r\n    return fetch('/questions', {\r\n\r\n    })\r\n        .then(response => response.json())\r\n        .then(result => questions.push(...result))\r\n\r\n}\r\n\r\n\r\nfetchQuest()\r\n    .then(() => {\r\n        console.log(questions);\r\n        const form = document.getElementById('form');\r\n        questions.forEach((element, index) => {\r\n            const question = document.createElement('div');\r\n            question.classList.add('answer')\r\n            form.appendChild(question);\r\n            question.innerHTML = `\r\n             <label for=\"question${index + 1}\" class=\"answer\" id = \"answer\">  ${index + 1 + '. '}${element.caption}  </label><br>\r\n\r\n             <input class=\"answer\" type=\"radio\" id=\"question${index + 1}\" name=\"answer${index + 1}\" value=\"true\" />Так\r\n\r\n             <input class=\"answer\" type=\"radio\" id=\"question${index + 1}\" name=\"answer${index + 1}\" value=\"\" />Ні\r\n             `})\r\n    })\n\n//# sourceURL=webpack://test/./client/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./client/index.js"]();
/******/ 	
/******/ })()
;