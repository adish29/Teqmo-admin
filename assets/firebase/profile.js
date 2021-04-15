firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    // console.log(user.email + ' is signed in')
    var userId = user.uid;
	  var email = user.email;
	  readUserData(userId,email)
	
	
  } else {
    console.log('No user is currently signed in')
    // window.location.href="admin.html"
  }
});


function readUserData(uid,email)
{
  var ref = firebase.database().ref('Teqmo/' + 'Stores/' + uid + '/details');
  ref.on('value', (snapshot) => {
  const data = snapshot.val();
  // console.log(data.Phone)
  document.getElementById("stateHeader").innerHTML = data.State;
  document.getElementById("profileName").innerHTML = data.OwnerName;
  document.getElementById("name").innerHTML += data.OwnerName;
  document.getElementById("headerName").innerHTML += data.OwnerName
  document.getElementById("profileEmail").innerHTML = email;
  document.getElementById("email").innerHTML += email;
  // document.getElementById("storeHeader").innerHTML = data.StoreName;
  // document.getElementById("store").innerHTML += data.StoreName;
  // document.getElementById("company").innerHTML += data.CompanyName;
  document.getElementById("contact").innerHTML += data.Phone;
  document.getElementById("address").innerHTML += data.Address;
  // document.getElementById("cityState").innerHTML = data.City + ", " + data.State;
  // document.getElementById("state").innerHTML = data.State;
  document.getElementById("zipcode").innerHTML = data.Zipcode;


});
}