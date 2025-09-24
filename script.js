let boxes = document.querySelectorAll(".box");
let restBtn = document.querySelector(".resBtn");
let winmsg = document.querySelector(".winningMsg");
let msg = document.querySelector(".winner");
let newGameBtn = document.querySelector(".newBtn");

let entryO = true;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (entryO) {
      box.innerText = "O";
      entryO = false;
    } else {
      box.innerText = "X";
      entryO = true;
    }
    box.disabled = true;
    winPattern();
  });
});

let winn = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];


let disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

let enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const resetgame = () =>{
    entryO = true;
    enableBoxes();
    winmsg.classList.add("hide");

}

const showWiner = (winner) =>{
    msg.innerText = `Congratulation, Winner is ${winner}`;
    winmsg.classList.remove("hide");
    disableBoxes();
}


let winPattern = () => {
  for (let patten of winn) {
    let post1 = boxes[patten[0]].innerText;
    let post2 = boxes[patten[1]].innerText;
    let post3 = boxes[patten[2]].innerText;

    if (post1 != "" && post2 != "" && post3 != "") {
      if (post1 === post2 && post2 === post3) {
        console.log("winner", post1);
        showWiner(post1);
      }
    }
  }
};


newGameBtn.addEventListener("click", resetgame);
restBtn.addEventListener("click", resetgame);