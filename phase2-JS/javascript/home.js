document.getElementById('p1').addEventListener('click', function() {location.href = 'home.html'}, false);
    document.getElementById('p2').addEventListener('click', function() {location.href = 'Add.html'}, false);
    document.getElementById('p3').addEventListener('click', function() {location.href = 'Update.html'}, false);
    document.getElementById('p4').addEventListener('click', function() {location.href = 'search.html'}, false);
    document.getElementById('p5').addEventListener('click', function() {location.href = 'Vacations_review.html'}, false);

    function checkEmail() {
        

    var email = document.getElementById('txtEmail');
    if(email.value.match('@')){
    return true;
    }else{
    window.alert("Please provide a valid Email Address");
    email.focus;
    return false;
    }
    }
    function checkPassword(){
    var password=document.getElementById('pass');
    if(password.value==''){
        alert('Please provide a valid password');
        password.focus;
        return false;
    }else{
        return true;
    }
}