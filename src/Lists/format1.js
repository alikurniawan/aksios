var userId = 12345
var url = `/user?ID=${userID}` // sama dengan '/user?ID=12345'

axios.get(url)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })