let form = document.getElementById("regist")
let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let email = document.getElementById("email");
let pwd = document.getElementById("pwd");

form.addEventListener("submit", async (e) =>{
    e.preventDefault();
    
      const formTitle = firstName.value.trim();
      const formName = lastName.value.trim();
      const formEmail = email.value.trim();
      const formPwd = pwd.value.trim();
      if (!formTitle) {
        alert("Please enter a todo!");
        return;
      }

      const newUser = { firstName: formTitle , lastName: formName , email: formEmail , password: formPwd };
      console.log(newUser)

      try {
        
        const response = await fetch("api/user/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        });
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        localStorage.setItem("firstname", json.firstName);
        window.location.replace("/index.html");
        console.log(json);
      } catch (error) {
        console.error(error.message);
      }


       firstName.value = ""; 
       lastName.value = ""
       email.value = ""
       pwd.value = ""
       console.log("this works")
})