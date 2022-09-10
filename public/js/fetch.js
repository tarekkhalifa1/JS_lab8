document.body.onload = function (){
    var usersDiv = document.getElementById('users');
fetch('https://reqres.in/api/users?page=2')
  .then((response) => response.json())
  .then((data) =>  { 
    data.data.forEach(user => {
        const userDiv = document.createElement('div');
        const userEmail = document.createElement('p');
        const userAvatar = document.createElement('img');
        userAvatar.setAttribute('src', user.avatar);
        const textEmail = document.createTextNode(user.email);
        userEmail.appendChild(textEmail);
        userDiv.appendChild(userEmail);
        userDiv.appendChild(userAvatar);
        usersDiv.appendChild(userDiv);
    });

   } );

} // end fetching data function