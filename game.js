// ============================================================
// game.js: Branching Navigation & Narrative Tools
// ============================================================

// ------------------------------------------------------------
// makeChoice(nextFile)
// This is the core mechanic of your CYOA. It tells the browser
// to leave the current page and load the next story node.
// ------------------------------------------------------------
function makeChoice(nextFile) {
  window.location.href = nextFile;
}

// ------------------------------------------------------------
// Philosophical Failure Quotes
// Use getRandomQuote() on your 8 ending screens.
// ------------------------------------------------------------
const QUOTES = [
  "There's no feeling more intense than starting over.",
  "What cannot be defeated by over-thinking can be overcome by patience.",
  "The soul is dyed the color of its thoughts. Think only on failure, and you will fail.",
  "Don't feel bad about losing your progress. It's the nature of the mountain.",
  "You cannot now realize that you will ever get over it."
];

function getRandomQuote() {
  return random(QUOTES);
}