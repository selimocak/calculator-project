(function () {
  let screen = document.querySelector('.screen');
  let buttons = document.querySelectorAll('.btn');
  let clear = document.querySelector('.btn-clear');
  const equal = document.querySelector('.btn-equal');

  buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
      let value = e.target.dataset.num;
      if (value === '=') {
        try {
          screen.value = eval(screen.value);
        } catch (error) {
          screen.value = 'Invalid Input';
        }
      } else if (value === 'C') {
        screen.value = '';
      } else {
        screen.value += value;
      }
    });
  });
})();
