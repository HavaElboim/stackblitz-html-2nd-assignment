let move_click = document.getElementById('onClickText');
let move_hover = document.getElementById('onHoverText');
let tmp, tmp2, tmp3;
let jump_x = 100,
  jump_y = 50;

let screen_width = window.screen.width;
let screen_height = window.screen.height;
let max_width = Math.min(700, screen_width);
let max_height = Math.min(400, screen_height);
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

function moveOnHover() {
  console.log(move_hover.style.top);

  // .style.top is the position of the element from the top of the screen
  tmp = Number(move_hover.style.top.replace(/\D/g, ''));
  console.log('move hover: tmp is ', tmp);

  // add the increment set at the beginning of the script
  tmp2 = tmp + jump_y;
  console.log(tmp2);

  //set the new position from the top
  if (tmp2 < max_height) {
    move_hover.style.top = tmp2 + 'px';
    console.log('adding jump');
  } else {
    move_hover.style.top = '0px';
    console.log('resetting to 0');
  }
}
