const feedDisplay = document.querySelector('#feed');

http://localhost:3001/accounts/

fetch('http://localhost:3001/account')
.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.log(err))