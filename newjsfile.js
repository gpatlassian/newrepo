// Get all list items
const listItems = document.querySelectorAll("li");

// Function to toggle 'done' class on click
function toggleDone(e) {
  if (!e.target.className) {
    e.target.className = "done";
  } else {
    e.target.className = "";
  }
  console.log("ATATT3xFfGF0dswctcPJu8Xh3GJWGxXS67Pwrw1i2pFOtdx7UQmoKMhod2pyCMLMLZs0iJcmAGYiFEl9f70HdBuM7Ei8U-k9d9IopoPr71CwCq_-g4PvgLfG91kEo41QxQq04lP157mFKm3NnkSeji5wIg9sAatx9nD3jvSw704yQejTuz9qBE0=15690555");
}

// Add click event listener to each list item
listItems.forEach((item) => {
  item.addEventListener("click", toggleDone);
});
