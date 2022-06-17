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
// const classData = fetchData('./class.json');
// const quizData = fetchData('./quiz.json');

let isClass = false;
let isQuiz = false;
let classCategory = 0;
let quizCategory = 0;


const addActive = (event) => {
  event.target.classList.add('active');
}

const addClassContents = (classData) => {
  let str = '';
  let blank = ' ';
  num = classData.length;
  for (let i = 0; i < classData.length; i++) {
    let links = '';
    for (let j = 0; j < classData[i]['links'].length; j++) {
      links += `<a href="${classData[i]["links"][j]}" class="badge bg-secondary">${j + 1}</a> ${blank}`
    }
    str += `
    <tr>
    <th scope="row">${classCategory == 'recent' ? num : i + 1}</th>
    <td>${classData[i].title}</td>
    <td>
      <a href="${classData[i].docUrl}" class="badge bg-secondary">문서</a>
    </td>
    <td>${links}</td>
    <td>${classData[i].date}</td>
    <td>
      <a href="${classData[i].gitUrl}">git</a>
    </td>
  </tr>`
  num--;
  }
  classWrapper.innerHTML = str;
}

const addQuizContents = (quizData) => {
  let str = '';
  for (let i = 0; i < quizData.length; i++) {
    str += `
  <tr>
    <td>${quizData[i].title}</td>
    <td>
      <a class="badge bg-secondary" href="${quizData[i].docUrl}">문서</a>
    </td>
    <td><a href="${quizData[i].previewUrl}">보기</a></td>
    <td><a href="${quizData[i].gitUrl}">git</a></td>
  </tr>
  `
  }
  quizWrapper.innerHTML = str;
  isQuiz = true;
}


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

classAllBtn.addEventListener('click', (event) => {
  classCategory = 'all';
  isClass = true;
  isQuiz = false;
  loading(classLoading);
  fetchData('./class.json');
});
classHelpBtn.addEventListener('click', (event) => {
  classCategory = 'help';
  isClass = true;
  isQuiz = false;
  loading(classLoading);
  fetchData('./class.json');
});
classGitBtn.addEventListener('click', (event) => {
  classCategory = 'git';
  isClass = true;
  isQuiz = false;
  loading(classLoading);
  fetchData('./class.json');
});
classRecentBtn.addEventListener('click', (event) => {
  classCategory = 'recent';
  isClass = true;
  isQuiz = false;
  loading(classLoading);
  fetchData('./class.json');
});


quizAllBtn.addEventListener('click', () => {
  quizCategory = 'all';
  isQuiz = true;
  isClass = false;
  loading(quizLoading);
  fetchData('./quiz.json');
});

quizGitBtn.addEventListener('click', () => {
  quizCategory = 'git';
  isQuiz = true;
  isClass = false;
  loading(quizLoading);
  fetchData('./quiz.json');
});

function fetchData(url) {
    fetch(url)
      .then(function (response) {
        return response.json()
      })
      .then(function(data) {
        if(isClass) {
          if (classCategory == 'all') {
            addClassContents(data);
          }
          else if (classCategory == 'help') {
            let filtered = filterClass(data);
            addClassContents(filtered);
          }
          else if (classCategory == 'git') {
            let filtered = filterClass(data);
            addClassContents(filtered);
          }
          else if (classCategory == 'recent') {
            let filtered = filterClass(data);
            addClassContents(filtered);
          }
        }
        else if (isQuiz) {
          if (quizCategory === 'all') {
            addQuizContents(data);
          }
          else if (quizCategory === 'git') {
            let filtered = filterQuiz(data);
            addQuizContents(filtered);
          }
        } 
      })
}

const filterClass = (data) => {
  let filteredData = [];
  if (classCategory == 'recent') {
    data.sort().reverse();
  }
  for (let i = 0; i < data.length; i++) {
    if (classCategory == 'help' && data[i]['links'].length == 0) {
      continue;
    }
    else if (classCategory == 'git' && !(data[i].gitUrl)) {
      continue;
    }
    else {
      filteredData[filteredData.length] = data[i];
    } 
  }
  return filteredData;
}

const filterQuiz = (data) => {
  console.log(data);
  let filteredData = [];
  for (let i = 0; i < data.length; i++) {
    if (quizCategory == 'git' && !(data[i].gitUrl)) {
      continue;
    }
    else {
      filteredData[filteredData.length] = data[i];
    } 
  }
  return filteredData;
}

function loading(loading) {
  loading.style.display = "block";
  setTimeout(() => {
    loading.style.display = "none";
  }, 500);
}