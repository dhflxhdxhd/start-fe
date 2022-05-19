
// fetch('data.json')
//   .then(function(response){
//     response.json().then(function(data){
//       console.log('json data:',data);
//     });
//   })
//  .catch(function(err) {
//     console.log('Fetch Error :-S', err);
//   });


function getFetch(url,callback) {
  fetch('data.json')
  .then((res) => res.json())
  .then((data) => callback(data))
}

getFetch('data.json', (data) => console.log(data));