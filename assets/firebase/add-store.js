//document.getElementById('screenLabel').value

//updates confirmation page based on user inputs.
function confirmpage()
{
document.getElementById("fn").innerHTML = document.getElementById('firstNameLabel').value + " " + document.getElementById('lastNameLabel').value;
document.getElementById("email").innerHTML = document.getElementById('emailLabel').value;
document.getElementById("phone").innerHTML = document.getElementById('phoneLabel').value;;
document.getElementById("sn").innerHTML = document.getElementById('storeLabel').value;
document.getElementById("cn").innerHTML = document.getElementById('companyLabel').value;
document.getElementById("city").innerHTML = document.getElementById('cityLabel').value;
document.getElementById("state").innerHTML = document.getElementById('stateLabel').value;
document.getElementById("addr1").innerHTML = document.getElementById('addressLine1Label').value;
document.getElementById("addr2").innerHTML = document.getElementById('addressLine2Label').value;
document.getElementById("zc").innerHTML = document.getElementById('zipCodeLabel').value;
document.getElementById("at").innerHTML = $("input[type='radio'][name='userAccountTypeRadio']:checked").val();


}


//Signup using secondary authentication. 
//Signup using email and password.
function signUp()
{
var email =  document.getElementById('emailLabel').value;
var password =  document.getElementById('passwordLabel').value;

secondaryApp.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    var user = userCredential.user;
    console.log(user.email)


    //Adding branch details of new store in database
    var newPostKey = firebase.database().ref().child('Teqmo/' + 'Stores/').push().key;
    var updates = {};
    updates['Teqmo/' + 'Stores/' + user.uid + '/details' + '/OwnerName'] = 
    document.getElementById('firstNameLabel').value;
    updates['Teqmo/' + 'Stores/' + user.uid + '/details' + '/StoreName'] = 
    document.getElementById('storeLabel').value;
    updates['Teqmo/' + 'Stores/' + user.uid + '/details' + '/CompanyName'] = 
    document.getElementById('companyLabel').value;
    updates['Teqmo/' + 'Stores/' + user.uid + '/details' + '/State'] = 
    document.getElementById('stateLabel').value;
    updates['Teqmo/' + 'Stores/' + user.uid + '/details' + '/Zipcode'] = 
    document.getElementById('zipCodeLabel').value;
    updates['Teqmo/' + 'Stores/' + user.uid + '/details' + '/Phone'] = 
    document.getElementById('phoneLabel').value;
    
    //Adding branch screens of new store in database
    var i;
    for(i=1;i<=document.getElementById('screenLabel').value;i++){
    updates['Teqmo/' + 'Stores/' + user.uid + '/Screens/' + i + '/lockUnlock'] = 1;
    updates['Teqmo/' + 'Stores/' + user.uid + '/Screens/' + i + '/loggedinStatus'] = 0;
    }

    //Adding branch payments of new store in database
     updates['Teqmo/' + 'Stores/' + user.uid + '/Payments/' + 'totalCommission'] = 0;
     updates['Teqmo/' + 'Stores/' + user.uid + '/Payments/' + 'totalSales'] = 0;
     updates['Teqmo/' + 'Stores/' + user.uid + '/Payments/' + 'Weeks'] = 'start';

    return firebase.database().ref().update(updates);

  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode,errorMessage)

  });
    

}


//Temperory function to check password length and show an alert.
function checkpass()
{
    var password =  document.getElementById('passwordLabel').value;
if(password.length<8)
{
    alert("Password length should be minimum 8 characters")
    location.reload();
}
}


//function to take input of number of screens only if the account created is of storeowner
function screenDiv()
{
if($("input[type='radio'][name='userAccountTypeRadio']:checked").val() === 'StoreOwner')
                    {
                    $('#screens').show();
                    } 
                    else {
                    $('#screens').hide();  
                    }
}