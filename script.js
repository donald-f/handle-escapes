document.getElementById("processButton").addEventListener("click", processText);
document.getElementById("clearButton").addEventListener("click", clearText);

function processText() {
  const inputText = document.getElementById("inputText").value;

  if (inputText.trim() === "") {
    alert("Please enter some text with escape sequences.");
    return;
  }

  // Convert escape sequences like \n, \t, etc. into actual characters
  const processedText = interpretEscapeSequences(inputText);

  // Display the result in the <pre> tag
  document.getElementById("outputText").textContent = processedText;
}

function clearText() {
  document.getElementById("inputText").value = "";
  document.getElementById("outputText").textContent = "";
}

// Function to interpret escape sequences
function interpretEscapeSequences(text) {
  // Replace escape sequences using regex
  return text
    .replace(/\\n/g, "\n") // Newline
    .replace(/\\t/g, "\t") // Tab
    .replace(/\\\\/g, "\\") // Backslash
    .replace(/\\r/g, "\r") // Carriage return
    .replace(/\\'/g, "'") // Single quote
    .replace(/\\"/g, '"'); // Double quote
}
