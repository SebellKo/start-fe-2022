const filterClass = (data, classCategory) => {
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
  
  const filterQuiz = (data, quizCategory) => {
    let filteredData = [];
    for (let i = 0; i < data.length; i++) {
      if (quizCategory == 'git' && !(data[i].gitUrl)) {
        console.log(data[i]);
        continue;
      }
      else {
        filteredData[filteredData.length] = data[i];
      } 
    }
    return filteredData;
  }

  export {filterClass, filterQuiz};
