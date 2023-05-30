let move_click = document.getElementById('onClickText');
let tmp, tmp2, tmp3;
let jump_x = 100;

let screen_width = window.screen.width;
let max_width = Math.min(700, screen_width);
console.log('screen width is ', screen_width, ' max width is ', max_width);

function moveOnClick() {
  console.log(move_click.style.left);

  // .style.left is the position of the element from the left of the screen
  // .replace performs a regex. Here it replaces all non-integer characters (\D) with an empty character
  tmp = Number(move_click.style.left.replace(/\D/g, ''));
  console.log(tmp);

  // add the increment set at the beginning of the script
  tmp2 = tmp + jump_x;
  console.log(tmp2);

  //set the new position from the left
  if (tmp2 < max_width) {
    move_click.style.left = tmp2 + 'px';
    console.log('adding jump');
  } else {
    move_click.style.left = '0px';
    console.log('resetting to 0');
  }
}
