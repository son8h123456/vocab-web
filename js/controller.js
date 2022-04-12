const controller = {};
controller.register = ({ username, email, password, confirmPassword }) => {
  const registerForm = document.getElementById("register-form");

  if (username === "") {
    registerForm.username.classList.add('shakeErr')
    document.querySelector('#username-error').style.visibility  = "visible";
    view.setErrorMessage("username-error", "Please input first name");
  } else {
    view.setErrorMessage("username-error", "");
  }
  if (email === "") {
    registerForm.email.classList.add('shakeErr')
    document.querySelector('#email-error').style.visibility  = "visible";
    view.setErrorMessage("email-error", "Please input email");
  } else {
    view.setErrorMessage("email-error", "");
  }
  if (password === "") {
    registerForm.password.classList.add('shakeErr')
    document.querySelector('#password-error').style.visibility  = "visible";
    view.setErrorMessage("password-error", "Please input password");
  } else {
    view.setErrorMessage("password-error", "");
  }
  if (confirmPassword === "") {
    registerForm.confirmPassword.classList.add('shakeErr')
    document.querySelector('#cf-password-error').style.visibility  = "visible";
    view.setErrorMessage("cf-password-error", "Please input confirm password");
  } else if (password !== confirmPassword) {
    // registerForm.confirmPassword.classList.add('shakeErr')
    // document.querySelector('#cf-password-error').style.visibility  = "visible";
    view.setErrorMessage("cf-password-error", "Password didn't match");
  } else {
    view.setErrorMessage("cf-password-error", "");
  }
  if (
    username !== "" &&
    email !== "" &&
    password !== "" &&
    confirmPassword !== "" &&
    password === confirmPassword
  ) {
    const dataRegister = {
      username,
      email,
      password,
    };
    model.register(dataRegister);
  }
};
controller.login = ({ email, password }) => {
  const loginForm = document.getElementById("login-form");
  const loginFormEmail = loginForm.email;
        const loginFormPass = loginForm.password;
  if (email === "") {
    loginFormEmail.classList.add('shakeErr')
    document.querySelector('#email-error').style.visibility  = "visible";
    view.setErrorMessage("email-error", "Please input email");
  } else {
    view.setErrorMessage("email-error", "");
  }
  if (password === "") {
    loginFormPass.classList.add('shakeErr')
    document.querySelector('#password-error').style.visibility  = "visible";
    view.setErrorMessage("password-error", "Please input password");
  } else {
    view.setErrorMessage("password-error", "");
  }
  if (email !== "" && password !== "") {
    model.login({ email, password });
  }
};





      
      
       