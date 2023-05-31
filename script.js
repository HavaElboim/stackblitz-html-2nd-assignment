let move_click = document.getElementById('onClickText');
console.log('move_click is: ', move_click);
let move_hover = document.getElementById('onHoverText');
let tmp, tmp_left, tmp_top, tmp2, tmp2_left, tmp2_top, tmp3;
let jump_x = 100,
  jump_y = 50;

let screen_width = window.screen.width;
let screen_height = window.screen.height;
let max_width = Math.min(700, screen_width);
let max_height = Math.min(400, screen_height);
console.log('screen width is ', screen_width, ' max width is ', max_width);

class movingBox {
  constructor(element_to_move, jump_top, jump_left) {
    this.jump_top = jump_top;
    this.jump_left = jump_left;
    this.element_to_move = element_to_move;
  }
  //method:
  moveOnAction() {
    // .style.left is the position of the element from the left of the screen
    console.log(this.element_to_move.style.left);

    // .replace performs a regex. Here it replaces all non-integer characters (\D) with an empty character
    tmp_left = Number(this.element_to_move.style.left.replace(/\D/g, ''));
    tmp_top = Number(this.element_to_move.style.top.replace(/\D/g, ''));
    console.log(tmp_left, tmp_top);

    // add the increment given in the class constructor
    tmp2_left = tmp_left + this.jump_left;
    tmp2_top = tmp_top + this.jump_top;
    console.log(tmp2_left, tmp2_top);

    //set the new position from the left
    if (tmp2_left < max_width) {
      this.element_to_move.style.left = tmp2_left + 'px';
      console.log('adding jump from left');
    } else {
      this.element_to_move.style.left = '0px';
      console.log('resetting left to 0');
    }

    //set the new position from the top
    if (tmp2_top < max_height) {
      this.element_to_move.style.top = tmp2_top + 'px';
      console.log('adding jump from top');
    } else {
      this.element_to_move.style.top = '0px';
      console.log('resetting top to 0');
    }
  }
}

let clickBox = new movingBox(move_click, 100, 0);
let hoverBox = new movingBox(move_hover, 0, 50);

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
