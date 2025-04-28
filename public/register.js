let form = document.getElementById("regist")
let firstName = document.getElementById("firstName")

form.addEventListener("submit", async (e) =>{
    e.preventDefault();
    
      const formTitle = firstName.value.trim();
      const lastName = lastName.value.trim();
      if (!formTitle) {
        alert("Please enter a todo!");
        return;
      }

      const newUser = { firstName: formTitle , lastName: lastName };
      console.log(newUser)

      try {
        
        const response = await fetch("/user/register", {
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
        console.log(json);
      } catch (error) {
        console.error(error.message);
      }
     

       firstName.value = ""; 
       console.log("this works")
})