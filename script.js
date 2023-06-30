var button = document.getElementById('custom-button');

document.addEventListener('mousemove', function(event) {
  var buttonRect = button.getBoundingClientRect();
  var buttonCenterX = buttonRect.left + buttonRect.width / 2;
  var buttonCenterY = buttonRect.top + buttonRect.height / 2;

  var mouseX = event.clientX;
  var mouseY = event.clientY;

  var rotateX = -(mouseY - buttonCenterY) / 15;
  var rotateY = (mouseX - buttonCenterX) / 15;

  button.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
});
