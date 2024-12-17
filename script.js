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

const outputPre = document.getElementById("outputText");

// Add event listener for keydown on the <pre> element
outputPre.addEventListener("keydown", function (event) {
  // Check if 'Ctrl + A' (or 'Cmd + A' on Mac) was pressed
  if ((event.ctrlKey || event.metaKey) && event.key === "a") {
    event.preventDefault(); // Prevent the default "select all" behavior

    // Create a Range and select the text content inside <pre>
    const range = document.createRange();
    range.selectNodeContents(outputPre);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }
});
