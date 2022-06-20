document.getElementById('p1').addEventListener('click', function() {location.href = 'home.html'}, false);
document.getElementById('p2').addEventListener('click', function() {location.href = 'Add.html'}, false);
document.getElementById('p3').addEventListener('click', function() {location.href = 'Update.html'}, false);
document.getElementById('p4').addEventListener('click', function() {location.href = 'search.html'}, false);
document.getElementById('p5').addEventListener('click', function() {location.href = 'Vacations_review.html'}, false);

function checkValid() {
  
  const form = document.getElementById("vacationForm");
  var fromDate = new Date(document.getElementById("fromDate").value);
  var toDate = new Date(document.getElementById("toDate").value);
  const reason = document.getElementById("res");
  const errorElement = document.getElementById("error");
  let messages = [];
  if (fromDate === null) {
    messages.push("From Date is required");
    //document.getElementById("error").innerHTML = "From Date is required";
    alert("From Date is required");
  }

  if (toDate === null) {
    messages.push("To Date is required");
    //document.getElementById("error").innerHTML = "To Date is required";
    alert("To Date is required");
  }

  if (fromDate > toDate) {
    messages.push("Invalid entry! your to date must be after your from date");
    //document.getElementById("error").innerHTML = "Invalid entry! your to date must be after your from date";
    alert("Invalid entry! your to date must be after your from date");
  }

  if (reason.value === "" || reason.value === null) {
    messages.push("You must enter the reason of your vacation request!");
    window.alert("You must enter the reason of your vacation request!");
  }

  
  form.addEventListener("submit", (e) => {
    if (reason.value != "" && !(fromDate > toDate)) {
      document.getElementById("submitted").innerHTML = "Submitted";
    } else {
      document.getElementById("submitted").innerHTML = "Not submitted";
    }  
    if (messages.length >= 0) {
      e.preventDefault();
      errorElement.innerText = messages.join(", ");
    }
  });
}
