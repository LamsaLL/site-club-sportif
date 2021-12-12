document.addEventListener("DOMContentLoaded", function () {
  const postLoginForm = async (formattedFormData) => {
    const response = await fetch("php/login.php", {
      // post data php
      method: "POST",
      body: formattedFormData,
    });
    return await response.json();
  };

  // login function
  const onLogin = (e) => {
    e.preventDefault();
    // get username and password
    const login = document.getElementById("login").value;
    const password = document.getElementById("password").value;

    // new formData
    const formData = new FormData();

    // add data to formData
    formData.append("login", login);
    formData.append("password", password);

    postLoginForm(formData).then((data) => {
      document.getElementById("error-message").innerHTML = data.message;
    });
  };

  // login submit button
  document.getElementById("login-form").addEventListener("submit", onLogin);
});
