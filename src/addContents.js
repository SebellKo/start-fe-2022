const addClassContents = (classData, classWrapper, classCategory) => {
    let str = '';
    let blank = ' ';
    let num = classData.length;
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
  
  const addQuizContents = (quizData, isQuiz, quizWrapper) => {
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

  export {addClassContents, addQuizContents};