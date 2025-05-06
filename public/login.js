document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("regist");
  let email = document.getElementById("email");
  let pwd = document.getElementById("pwd");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let formEmail = email.value.trim();
    let formPwd = pwd.value.trim();

    //  const response = await fetch("api/user/login");
    //  const users = await response.json();
    const user = {
      email: formEmail,
      password: formPwd,
    };
    console.log(user);
    try {
      const response = await fetch("api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      console.log(json);
      localStorage.setItem("firstname", json.firstName);
      window.location.replace("/index.html");
    } catch (error) {
      console.error(error.message);
    }
  });
});
