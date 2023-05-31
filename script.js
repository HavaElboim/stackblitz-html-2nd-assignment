let move_click = document.getElementById('onClickText');
console.log('move_click is: ', move_click);
let move_hover = document.getElementById('onHoverText');
let move_enter = document.getElementById('onEnterText');
console.log('move_enter is: ', move_enter);
let move_leave = document.getElementById('onLeaveText');
let tmp_left, tmp_top, tmp2_left, tmp2_top;

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
let enterBox = new movingBox(move_enter, 10, 10);
let leaveBox = new movingBox(move_leave, 50, 70);
