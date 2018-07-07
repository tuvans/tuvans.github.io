var config = {
    apiKey: "AIzaSyAM8S2wfezrCTt6JvjPgB3ooLOYHxOij-g",
    authDomain: "tuvans-tuvan.firebaseapp.com",
    databaseURL: "https://tuvans-tuvan.firebaseio.com",
    projectId: "tuvans-tuvan",
    storageBucket: "tuvans-tuvan.appspot.com",
    messagingSenderId: "773698577966"
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
  // var service = getInputVal('service');
  var linkedin = getInputVal("linkedin");
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, linkedin, message);

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
    // service:service,
    linkedin = linkedin,
    message:message
  });
}