function fetchData(url) {
    fetch(url)
      .then(function (response) {
        return response.json()
      })
      .then(function(data) {
          console.log(data);
      })
  }
  
  fetchData('./class.json')