//YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyC80vzTViKatR1qNuI_G9ZlX_27VeMgQGw",
    authDomain: "chatapp-45ada.firebaseapp.com",
    databaseURL: "https://chatapp-45ada-default-rtdb.firebaseio.com",
    projectId: "chatapp-45ada",
    storageBucket: "chatapp-45ada.appspot.com",
    messagingSenderId: "293534894961",
    appId: "1:293534894961:web:7da9bf8d97309d4ae044d0"
  };

firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send(){
msg =  document.getElementById("message").value; 
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});
document.getElementById("message").value = " ";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "Kwitter.html";
}
//End code
    } });  }); }
getData();
