function yourName() {
    var questions = document.getElementById("questions");
    var x = document.getElementById("name").value;
    document.getElementById("displayName").innerHTML = 'Hello, ' + x;
    document.getElementById("displayName").style.color = "black";
    questions.style.display = "block";

}

function yourFeeling() {
    var x = document.getElementById("feeling").value;
    var hungryQuestions = document.getElementById("hungryQuestions");
    var sportyQuestions = document.getElementById("sportyQuestions");
    var lazyQuestions = document.getElementById("lazyQuestions");
    var adventurousQuestions = document.getElementById("adventurousQuestions");
    var touristyQuestions = document.getElementById("touristyQuestions");

    switch(x){
        case "Hungry":
            sportyQuestions.style.display = "none";
            lazyQuestions.style.display = "none";
            adventurousQuestions.style.display = "none";
            touristyQuestions.style.display = "none";
            hungryQuestions.style.display = "block";
            break;
        case "Sporty":
            hungryQuestions.style.display = "none";
            lazyQuestions.style.display = "none";
            adventurousQuestions.style.display = "none";
            touristyQuestions.style.display = "none";
            sportyQuestions.style.display = "block";
            break;
        case "Lazy":
            hungryQuestions.style.display = "none";
            sportyQuestions.style.display = "none";
            adventurousQuestions.style.display = "none";
            touristyQuestions.style.display = "none";
            lazyQuestions.style.display = "block";
            break;
        case "Adventurous":
            hungryQuestions.style.display = "none";
            sportyQuestions.style.display = "none";
            touristyQuestions.style.display = "none";
            lazyQuestions.style.display = "none";
            adventurousQuestions.style.display = "block";
            break;
        case "Touristy":
            hungryQuestions.style.display = "none";
            sportyQuestions.style.display = "none";
            adventurousQuestions.style.display = "none";
            lazyQuestions.style.display = "none";
            touristyQuestions.style.display = "block";
            break;


    }

function hungry(){

}

function sporty(){
    
}

function lazy(){
    
}

function adventurous(){
    
}

function touristy(){
    
}
