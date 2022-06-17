import {addClassContents, addQuizContents} from './addContents.js';
import {filterClass, filterQuiz} from './filter.js';


function fetchData(url, classCategory, quizCategory, isClass, isQuiz, classWrapper, quizWrapper) {
    fetch(url)
      .then(function (response) {
        return response.json()
      })
      .then(function(data) {
        if(isClass) {
          if (classCategory == 'all') {
            addClassContents(data, classWrapper, classCategory);
          }
          else if (classCategory == 'help') {
            let filtered = filterClass(data, classCategory);
            addClassContents(filtered, classWrapper, classCategory);
          }
          else if (classCategory == 'git') {
            let filtered = filterClass(data, classCategory);
            addClassContents(filtered, classWrapper, classCategory);
          }
          else if (classCategory == 'recent') {
            let filtered = filterClass(data, classCategory);
            addClassContents(filtered, classWrapper, classCategory);
          }
        }
        else if (isQuiz) {
          if (quizCategory === 'all') {
            addQuizContents(data, isQuiz, quizWrapper);
          }
          else if (quizCategory === 'git') {
            let filtered = filterQuiz(data, quizCategory);
            addQuizContents(filtered, isQuiz, quizWrapper);
          }
        } 
      })
}

export {fetchData};