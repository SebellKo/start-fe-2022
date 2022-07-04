import {fetchData} from './fetch.js';
import './app.css';

const classAllBtn = document.querySelector('#classAll');
const classHelpBtn = document.querySelector('#classHelp');
const classGitBtn = document.querySelector('#classGit');
const classRecentBtn = document.querySelector('#classRecent');
const classBtns = document.querySelector('#classBtns');
const quizAllBtn = document.querySelector('#quizAll');
const quizGitBtn = document.querySelector('#quizGit');
const quizBtns = document.querySelector('#quizBtns');
const classWrapper = document.querySelector('#class');
const quizWrapper = document.querySelector('#quiz');
const classLoading = document.querySelector('#classLoading');
const quizLoading = document.querySelector('#quizLoading');

const classBtnChildren = [...classBtns.children];
const quizBtnChildren = [...quizBtns.children];

let isClass = false;
let isQuiz = false;
let classCategory = 0;
let quizCategory = 0;


classBtnChildren.forEach((item) => {
  item.addEventListener('click', (event) => {
    for (let i = 0; i < classBtnChildren.length; i++) {
      classBtnChildren[i].classList.remove('active');
    };
    addActive(event);
  });
})

quizBtnChildren.forEach((item) => {
  item.addEventListener('click', (event) => {
    for (let i = 0; i < quizBtnChildren.length; i++) {
      quizBtnChildren[i].classList.remove('active');
    };
    addActive(event);
  });
})

classAllBtn.addEventListener('click', () => {
  classCategory = 'all';
  isClass = true;
  isQuiz = false;
  loading(classLoading);
  fetchData('class.json', classCategory, quizCategory, isClass, isQuiz, classWrapper);
});
classHelpBtn.addEventListener('click', () => {
  classCategory = 'help';
  isClass = true;
  isQuiz = false;
  loading(classLoading);
  fetchData('./class.json', classCategory, quizCategory, isClass, isQuiz, classWrapper);
});
classGitBtn.addEventListener('click', () => {
  classCategory = 'git';
  isClass = true;
  isQuiz = false;
  loading(classLoading);
  fetchData('./class.json', classCategory, quizCategory, isClass, isQuiz, classWrapper);
});
classRecentBtn.addEventListener('click', () => {
  classCategory = 'recent';
  isClass = true;
  isQuiz = false;
  loading(classLoading);
  fetchData('./class.json', classCategory, quizCategory, isClass, isQuiz, classWrapper);
});

quizAllBtn.addEventListener('click', () => {
  quizCategory = 'all';
  isQuiz = true;
  isClass = false;
  loading(quizLoading);
  fetchData('./quiz.json', classCategory, quizCategory, isClass, isQuiz, classWrapper, quizWrapper);
});

quizGitBtn.addEventListener('click', () => {
  quizCategory = 'git';
  isQuiz = true;
  isClass = false;
  loading(quizLoading);
  fetchData('./quiz.json', classCategory, quizCategory, isClass, isQuiz, classWrapper, quizWrapper);
});


const addActive = (event) => {
  event.target.classList.add('active');
}

const loading = (loading) => {
  loading.style.display = "block";
  setTimeout(() => {
    loading.style.display = "none";
  }, 500);
}