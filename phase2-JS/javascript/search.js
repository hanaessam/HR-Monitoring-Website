function toHome(){
    document.getElementById('p1').addEventListener('click', function() {location.href = 'home.html'}, false);
}
function toAdd(){
document.getElementById('p2').addEventListener('click', function() {location.href = 'Add.html'}, false);
}
function toUpdate(){
    document.getElementById('p3').addEventListener('click', function() {location.href = 'Update.html'}, false);
}
function toSearch(){
    document.getElementById('p4').addEventListener('click', function() {location.href = 'search.html'}, false);
}
function toReview(){
    document.getElementById('p5').addEventListener('click', function() {location.href = 'Vacations_review.html'}, false);
}


function Check_Name() {
            var name = document.forms["search form"]["Employee name"].value;
            var check=true;
            if (name == "") {
                window.alert("Name can't be blank , Please enter employee's name");
                location.reload(true);
                return false;
            }
            return true;
        }

function to_vacation_form()
        {
            document.getElementById('Vacation_request').addEventListener('click', function () { location.href = 'vacation_form.html' }, false);
        }