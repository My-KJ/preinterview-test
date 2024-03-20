let history = [];
let currentPosition = -1;

function inputUrl() {
  let urlInput = document.getElementById("urlInput").value;
  history = history.slice(0, currentPosition + 1);
  history.push(urlInput);
  currentPosition++;
}

function goPrevious() {
  if (currentPosition <= 0) {
    alert("No website to previous");
  } else {
    currentPosition--;
    alert("Previous page: " + history[currentPosition]);
  }
}

function goNext() {
  if (currentPosition === history.length - 1) {
    alert("No website to go");
  } else {
    currentPosition++;
    alert("Next page: " + history[currentPosition]);
  }
}

function showCurrent() {
  if (currentPosition >= 0) {
    alert("Now you on " + history[currentPosition]);
  } else {
    alert("No current website");
  }
}

function showAll() {
  if (history.length > 0) {
    let output = "Full History:\n";
    history.forEach(url => {
      output += url + "\n";
    });
    alert(output);
  } else {
    alert("History is empty");
  }
}
