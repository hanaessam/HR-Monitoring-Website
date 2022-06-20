document.getElementById("p1").addEventListener(
  "click",
  function () {
    location.href = "home.html";
  },
  false
);
document.getElementById("p2").addEventListener(
  "click",
  function () {
    location.href = "Add.html";
  },
  false
);
document.getElementById("p3").addEventListener(
  "click",
  function () {
    location.href = "Update.html";
  },
  false
);
document.getElementById("p4").addEventListener(
  "click",
  function () {
    location.href = "search.html";
  },
  false
);
document.getElementById("p5").addEventListener(
  "click",
  function () {
    location.href = "vacation_review.html";
  },
  false
);

function validation() {
  //var date = new Date(document.getElementById("date").value);

  const name = document.getElementById("name");
  const id = document.getElementById("id");
  const email = document.getElementById("email");
  const errorElement = document.getElementById("error");
  const salary = document.getElementById("sal");
  const vacdays = document.getElementById("num");
  const status = document.getElementsByName("status");
  const Gender = document.getElementsByName("Gender");
  const phonenum = document.getElementById("Pnum");
  const address = document.getElementById("adress");
  const form = document.getElementById("addForm");

  let messages = [];

  if (name.value === "" || name.value === null) {
    messages.push("Name is required");
    window.alert("Please enter your name.");
  }

  if (id.value === "" || id.value === null) {
    messages.push("ID is required");
    window.alert("Please enter your id.");
  }
  if (email.value === "" || email.value === null || !email.value.match("@")) {
    messages.push("Email is required");
    window.alert("Please enter a valid e-mail address.");
  }

  if (address.value === "" || address.value === null) {
    messages.push("Address is required");
    window.alert("Please enter your address.");
  }

  if (phonenum.value === "" || phonenum.value === null) {
    messages.push("Phone number is required");
    window.alert("Please enter your telephone number.");
  }

  if (Gender.value === null || Gender.value === "") {
    messages.push("Gender is required");
    window.alert("please insert your gender");
  }

  if (status.value === "" || status === null) {
    messages.push("Status is required");
    window.alert("please insert your martial status");
  }

  if (vacdays.value === "" || vacdays.value === null) {
    messages.push("Number of vacations days is required");
    window.alert("Please enter your vacation days");
  }

  if (salary.value === "" || salary.value === null) {
    messages.push("Salary is required");
    window.alert("Please enter your salary");
  }

  form.addEventListener("submit", (e) => {
    if (messages.length > 0) {
      e.preventDefault();
      errorElement.innerText = messages.join(", ");
    }
  });
}
