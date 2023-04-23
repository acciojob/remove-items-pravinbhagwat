//your JS code here. If required.
// Get the select element
const colorSelect = document.getElementById('colorSelect');

// Get the remove button element
const removeButton = document.querySelector('input[type="button"]');

// Add a click event listener to the remove button
removeButton.addEventListener('click', () => {
  // Get the selected option element
  const selectedOption = colorSelect.options[colorSelect.selectedIndex];

  // Remove the selected option element
  colorSelect.removeChild(selectedOption);
});