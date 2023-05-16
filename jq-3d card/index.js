const circle = document.getElementById("myDiv")

let currentColor = 'green';

// Add the onclick event listener
circle.addEventListener('click', function() {
  // Toggle the color
  if (currentColor === 'green') {
    circle.style.backgroundColor = 'black';
    currentColor = 'black';
  } else {
    circle.style.backgroundColor = 'green';
    currentColor = 'green';
  }
});

