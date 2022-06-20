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
function Approved_Rejected()
        {
            if(!(document.getElementById("Approved").checked)&&!(document.getElementById("Rejected").checked))
            {
                alert("You have to choose if vacation is Approved or not");
            }   
            
            else{
                if(document.getElementById("Approved").checked)
                
                    alert("Vacation is Approved");
                
                else
                    alert("Vacation is rejected");
                    
                
                }
                window.location.reload(true);

        }