var createAccountModal = document.querySelector("#createacountModal");
var createAccountbtn = document.querySelector("#createaccountbtn");
var span = document.getElementsByClassName("createacountclose")[0];
var SigninDropDownContent = document.querySelector("#SigninDropDownContent");
createAccountbtn.onclick = function () {
  createAccountModal.style.display = "block";
};
span.onclick = function () {
  createAccountModal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == createAccountModal) {
    createAccountModal.style.display = "none";
  }
};
var signinModal = document.querySelector("#signinModal");
var signinbtn = document.querySelector("#signinbtn");
var span = document.getElementsByClassName("signinclose")[0];
signinbtn.onclick = function () {
  signinModal.style.display = "block";
};
span.onclick = function () {
  signinModal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == signinModal) {
    signinModal.style.display = "none";
  }
};

//Sign in create account function
// creat account function
let createaccountform = document.querySelector("#createaccountform");
let userDetail = JSON.parse(localStorage.getItem("userDetail")) || [];
createaccountform.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(createaccountform.createacountname.value);
  let obj = {
    name: createaccountform.createacountname.value,
    email: createaccountform.createacountemail.value,
    password: createaccountform.createacountpassword.value,
    phone: createaccountform.createacountphone.value,
  };
  userDetail.push(obj);
  localStorage.setItem("userDetail", JSON.stringify(userDetail));
});

// .........................signin function
let signinform = document.querySelector("#signinform");
let signinData = JSON.parse(localStorage.getItem("signindata")) || null;
function signin() {
  if (signinData == null) {
    console.log("-1");
    signinform.addEventListener("submit", function (event) {
      event.preventDefault();
      let signinobj = {
        email: signinform.signinemail.value,
        password: signinform.signinpassword.value,
      };
      let check = 0;
      userDetail.forEach((element) => {
        if (
          element.email == signinobj.email &&
          element.password == signinobj.password
        ) {
          check = 1;
          document.querySelector("#signinfont").innerText =
            "Hello, " + element.name;
          signinModal.style.display = "none";
          element.signin = 1;
          localStorage.setItem("signindata", JSON.stringify(element)); //add signined user data to LS
          signedin();
        }
      });
      if (check == 0) {
        alert("Wrong Credentials");
      }
    });
  } else {
    signedin();
  }
}
signin();

function signedin() {
  signinData = JSON.parse(localStorage.getItem("signindata"));
  document.querySelector("#signinfont").innerText = "Hello, " + signinData.name;
  SigninDropDownContent.style.display = "none";
  let logout = document.querySelector("#logout");
  logout.innerText = "Log out";
  logout.style.color = "red";
  logout.addEventListener("click", function () {
    signinData = null;
    localStorage.setItem("signindata", JSON.stringify(signinData));
    window.location.href="homepage.html"
    signin();
  });
}