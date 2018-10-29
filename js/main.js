var config = {
  apiKey: "AIzaSyCk0ymQ2cFe0krSBKdf2uD7SXPBUxLK74Y",
  authDomain: "tuvans-tuvan-info.firebaseapp.com",
  databaseURL: "https://tuvans-tuvan-info.firebaseio.com",
  projectId: "tuvans-tuvan-info",
  storageBucket: "tuvans-tuvan-info.appspot.com",
  messagingSenderId: "181905799222"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactFormTuvans').addEventListener('submit', submitForm);

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