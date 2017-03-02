import Board from './board';

document.addEventListener('DOMContentLoaded', ()=>{
  const canvas = document.getElementById('demoCanvas');
  const board = new Board(canvas);

  // cursor.x = 300;
  board.drawDucks();
})
