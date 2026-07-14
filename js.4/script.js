// const button = document.getElementById("btn");

// button.addEventListener("click", function() {
//       document.getElementById("greetings").textContent = `Hello Future MERN Developer! 🚀`;
// });

// const button2 = document.getElementById("btn2");

// button2.addEventListener("click", function(){
//       document.getElementById("dreamCompany").textContent = "Google";
// });
      const profile = document.getElementById("profile");
      const button = document.getElementById("btn");

      let isHidden = false;
      button.addEventListener("click",function(){
            console.log("Button clicked");
            if (isHidden === false) {
                  profile.style.display = "none";
                  document.getElementById("status").textContent = "Profile Hidden";
                  isHidden = true;
            } else {
                  profile.style.display = "block";
                  document.getElementById("status").textContent = "Profile Visible";
                  isHidden = false;
            }
      })