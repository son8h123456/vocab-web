const model = {};
model.currentUser = {};
model.register = async ({ username, email, password }) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    // update profile
    firebase.auth().currentUser.updateProfile({
      username: username,
    });
    // gui email verify
    firebase.auth().currentUser.sendEmailVerification();
    alert("Register success! Please confirm your email");
    view.setActiveScreen("loginPage");
  } catch (err) {
    console.log(err);
    alert(err.message);
  }
};
model.login = async ({ email, password }) => {
  try {
    const response = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
      
  } catch (err) {
    alert(err.message);
    console.log(err);
  }
};
