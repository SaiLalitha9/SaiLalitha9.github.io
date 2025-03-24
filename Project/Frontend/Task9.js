function calculateGrade() {
    let score = parseFloat(document.getElementById("score_input").value);
    let result = "";

    if (score >= 80 && score <= 100) {
        result = "A";
    } else if (score >= 60 && score < 80) {
        result = "B";
    } else if (score >= 40 && score < 60) {
        result = "C";
    } else if (score >= 0 && score < 40) {
        result = "F";
    } else {
        result = "Invalid Score";
    }

    document.getElementById("grade_span").innerText = result;
}