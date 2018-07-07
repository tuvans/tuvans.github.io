var config = {
    apiKey: "AIzaSyBGslloVNqzoyzK_Ri06TzPt-tjU_NSH94",
    authDomain: "tuvans-khachhang.firebaseapp.com",
    databaseURL: "https://tuvans-khachhang.firebaseio.com",
    projectId: "tuvans-khachhang",
    storageBucket: "tuvans-khachhang.appspot.com",
    messagingSenderId: "29846595376"
  };
  firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var linkedin = getInputVal('linkedin');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, phone, linkedin, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, linkedin, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    phone:phone,
    linkedin:linkedin,
    message:message
  });
}