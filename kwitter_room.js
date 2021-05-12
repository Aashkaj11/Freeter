
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDs_01FBoLwHLy49R0ymVNERplwKSarlbU",
      authDomain: "practice-freeter.firebaseapp.com",
      databaseURL: "https://practice-freeter-default-rtdb.firebaseio.com",
      projectId: "practice-freeter",
      storageBucket: "practice-freeter.appspot.com",
      messagingSenderId: "828759668626",
      appId: "1:828759668626:web:e29ca4a6e2c1ac6719b34b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Hi " + user_name + " !!";
 function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "freeter@page.html";
}
 function getData() {
      firebase.database().ref("/").on('value', function (snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach( function (childSnapshot) {childKey = childSnapshot.key;
                  Room_names = childKey;
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirect(this.id)'>#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
            });
      });
 }
getData();
 function redirect(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "freeter@page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
