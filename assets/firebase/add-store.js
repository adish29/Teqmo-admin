
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log(user.email + ' is signed in')
    var userId = user.uid;
    var email = user.email;
    // readUserData(userId)
    // writeUserData(email,userId) ..... function working successfully.
    
  } else {
    console.log('No user is currently signed in')
    // window.location.href="admin.html"
  }
});


function confirmpage()
{
document.getElementById("fn").innerHTML = document.getElementById('firstNameLabel').value + " " + document.getElementById('lastNameLabel').value;
document.getElementById("email").innerHTML = document.getElementById('emailLabel').value;
document.getElementById("phone").innerHTML = document.getElementById('phoneLabel').value;;
document.getElementById("sn").innerHTML = document.getElementById('organizationLabel').value;
document.getElementById("cn").innerHTML = document.getElementById('departmentLabel').value;
document.getElementById("city").innerHTML = document.getElementById('cityLabel').value;
document.getElementById("state").innerHTML = document.getElementById('stateLabel').value;
document.getElementById("addr1").innerHTML = document.getElementById('addressLine1Label').value;
document.getElementById("addr2").innerHTML = document.getElementById('addressLine2Label').value;
document.getElementById("zc").innerHTML = document.getElementById('zipCodeLabel').value;
document.getElementById("at").innerHTML = $("input[type='radio'][name='userAccountTypeRadio']:checked").val();


}






function signUp()
{
var email =  document.getElementById('emailLabel').value;
var password =  document.getElementById('passwordLabel').value;
if(password.length<8)
{
    
}
else{
secondaryApp.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(user.email)
    var newPostKey = firebase.database().ref().child('Teqmo/' + 'Stores/').push().key;
    var updates = {};
    updates['Teqmo/' + 'Stores/' + user.uid + '/details' + '/OwnerName'] = document.getElementById('firstNameLabel').value;
    updates['Teqmo/' + 'Stores/' + user.uid + '/details' + '/StoreName'] = document.getElementById('organizationLabel').value;
    updates['Teqmo/' + 'Stores/' + user.uid + '/details' + '/CompanyName'] = document.getElementById('departmentLabel').value;
    updates['Teqmo/' + 'Stores/' + user.uid + '/details' + '/State'] = document.getElementById('stateLabel').value;
    updates['Teqmo/' + 'Stores/' + user.uid + '/details' + '/Zipcode'] = document.getElementById('zipCodeLabel').value;
    updates['Teqmo/' + 'Stores/' + user.uid + '/details' + '/Phone'] = document.getElementById('phoneLabel').value;
    updates['Teqmo/' + 'Stores/' + user.uid + '/details' + '/Count'] = '0';
    return firebase.database().ref().update(updates);

   // secondaryApp.auth().signOut();
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode,errorMessage)
    // ..
  });
    
}
}

function checkpass()
{
    var password =  document.getElementById('passwordLabel').value;
if(password.length<8)
{
    alert("Password length should be minimum 8 characters")
    location.reload();
}
}

