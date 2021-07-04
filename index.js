function yourName() {
    var questions = document.getElementById("questions");
    var x = document.getElementById("name").value;
    document.getElementById("displayName").innerHTML = 'Hello, ' + x;
    questions.style.display = "block";

}

function yourFeeling() {
    var x = document.getElementById("feeling").value;
    document.getElementById("displayFeeling").innerHTML = 'Hello, ' + x;
}