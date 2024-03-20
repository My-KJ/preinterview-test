function calculateDays() {
    var xInput = document.getElementById("x").value;
    var yInput = document.getElementById("y").value;
    var mInput = document.getElementById("m").value;

    var xDate = new Date(xInput);
    var yDate = new Date(yInput);
    var mDate = new Date(mInput);

    // Check if mDate is within the range of xDate to yDate
    var isWithinRange = mDate >= xDate && mDate <= yDate;

    // Calculate the difference in days between xDate and mDate without using Math.abs()
    var diffFromX = (mDate - xDate) / (1000 * 60 * 60 * 24);

    var answerElement = document.getElementById("answer");
    if (isWithinRange) {
        answerElement.textContent = `True,${diffFromX} Days`;
    } else {
        answerElement.textContent = `Fales,${diffFromX} Days`;
    }
}
