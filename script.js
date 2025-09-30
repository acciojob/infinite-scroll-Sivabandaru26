//your code here!

// script.js
const list = document.getElementById("infi-list");
let itemCount = 0;

// Function to create a list item
function createItem(index) {
  const li = document.createElement("li");
  li.textContent = `Item ${index}`;
  list.appendChild(li);
}

// Function to load multiple items
function loadItems(count = 10) {
  for (let i = 0; i < count; i++) {
    itemCount++;
    createItem(itemCount);
  }
}

// Event listener for infinite scroll
list.addEventListener("scroll", () => {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight - 5) {
    loadItems(10);
  }
});

// Load first batch of items
loadItems();
