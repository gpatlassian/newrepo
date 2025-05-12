// Get all list items
const listItems = document.querySelectorAll("li");

// Function to toggle 'done' class on click
function toggleDone(e) {
  if (!e.target.className) {
    e.target.className = "done";
  } else {
    e.target.className = "";
  }
  console.log("ATATT3xFfGF0SBGZoycZxqHXTWsQbr7Ms3341Q8hFZ1nUF4i-OO4sB83bTepSvMnw0K9q5QafhDM0YXgJXbLzBMfM1F9vjD-2o6XCE3nuXQLDjxzGVOSBqtBzPvDXdFKH5L5RSN8sEYZCKp_3epggaMRaWo8x47nPXppM4SvKym7WQPN35stmVA=DC4FDA7E");
}

// Add click event listener to each list item
listItems.forEach((item) => {
  item.addEventListener("click", toggleDone);
});
