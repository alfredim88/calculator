const buttonsContainer = document.getElementById('buttonsContainer');

for (var i = 0; i<16; i++) {
  const button = document.createElement('div');
  button.classList = 'calcButton';
  button.classList.add('button' + i);
  buttonsContainer.appendChild(button);
}
