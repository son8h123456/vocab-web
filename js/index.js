const init = () => {
  // var firebaseConfig = {
  //   apiKey: "AIzaSyAuuvCn3EAJasFJh9gv_TespDPkBZFsy8Y",
  //   authDomain: "learn-eng-cijs51.firebaseapp.com",
  //   databaseURL: "https://learn-eng-cijs51.firebaseio.com",
  //   projectId: "learn-eng-cijs51",
  //   storageBucket: "learn-eng-cijs51.appspot.com",
  //   messagingSenderId: "189769773330",
  //   appId: "1:189769773330:web:926707c86eae87a1af83cb",
  // };
  // // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  // console.log(firebase.app());
  firebase.auth().onAuthStateChanged((res) => {
    console.log(res);
    if (res) {
      if (res.emailVerified) {
        model.currentUser = {
          username: res.username,
          email: res.email,
        };
        console.log(model.currentUser);
        view.setActiveScreen("loginSuccess");
      } else {
        view.setActiveScreen("loginPage");
        alert("Please verify your email");
      }
    } else {
      view.setActiveScreen("mainPage");
    }
  });






  
 


};
window.onload = init;
// () => {
//   view.setActiveScreen("mainPage");
// };
