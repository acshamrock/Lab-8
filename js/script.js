document.addEventListener("DOMContentLoaded", function () {
  const alertButton = document.getElementById("entrybutton");
  const textInput = document.getElementById("entryinput");
  const textOutput = document.getElementById("textoutput");

  
  alertButton.addEventListener("click", function () {  
    const inputValue = textInput.value;
    const alertMessage = "Brendan Dwyer: " + inputValue;
    alert(alertMessage);

    textOutput.textContent = inputValue;
  });
});

