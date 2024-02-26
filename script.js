let div = document.getElementById("container");
let dice = document.getElementById("dice");
let dice_result = document.getElementById("dice_result");

let val = 1;
let chance = true;
let red_prev = 1;
let blue_prev = 1;
let snakeArray = [
  { start: 98, to: 79 },
  { start: 95, to: 75 },
  { start: 92, to: 73 },
  { start: 87, to: 45 },
  { start: 62, to: 19 },
  { start: 64, to: 60 },
  { start: 54, to: 34 },
  { start: 17, to: 7 },
];
let ladderArray = [
  { start: 80, to: 99 },
  { start: 72, to: 91 },
  { start: 51, to: 67 },
  { start: 21, to: 42 },
  { start: 28, to: 84 },
  { start: 4, to: 14 },
];
window.addEventListener("load", () => {
  for (let i = 100; i >= 1; i--) {
    let child_div = document.createElement("div");
    child_div.setAttribute("id", `${i}`);
    if (snakeArray.findIndex((item) => item.start === i) !== -1) {
      child_div.innerHTML = `${i} <br> Snake </br>`;
    } else if (ladderArray.findIndex((item) => item.start === i) !== -1) {
      child_div.innerHTML = `${i} <br> Ladder </br>`;
    } else {
      child_div.innerHTML = i;
    }

    child_div.setAttribute("class", "child");
    if (i === 1) {
      child_div.setAttribute("class", "child first-child");
    }

    if (i == 100){
      child_div.innerHTML = `${i} <br> Winner </br>`;
      child_div.style.backgroundColor = "green";
    }

    div.appendChild(child_div);
  }
});

dice.addEventListener("click", () => {
  // let random = Number(Math.random().toString().substring(2, 3));

  let random = Math.floor(Math.random() * 6 + 1);


    if (chance === true) {
      if (red_prev + random <= 100) {
        let child_div = document.getElementById(red_prev);
        child_div.style.backgroundColor = "white";

        let snake = snakeArray.find((item) => item.start === red_prev + random);

        if (snake) {
          child_div = document.getElementById(snake.to);
          child_div.style.backgroundColor = "red";
          red_prev = snake.to;
        } else {
          let ladder = ladderArray.find(
            (item) => item.start === red_prev + random
          );
          if (ladder) {
            child_div = document.getElementById(ladder.to);
            child_div.style.backgroundColor = "red";

            red_prev = ladder.to;
          } else {
            child_div = document.getElementById(red_prev + random);

            child_div.style.backgroundColor = "red";

            red_prev = red_prev + random;
          }
        }

        chance = !chance;
      }
    } else {
      if (blue_prev + random <= 100) {
        let child_div = document.getElementById(blue_prev);
        child_div.style.backgroundColor = "white";

        let snake = snakeArray.find(
          (item) => item.start === blue_prev + random
        );
        if (snake) {
          child_div = document.getElementById(snake.to);
          child_div.style.backgroundColor = "blue";
          blue_prev = snake.to;
        } else {
          let ladder = ladderArray.find(
            (item) => item.start === blue_prev + random
          );

          if (ladder) {
            child_div = document.getElementById(ladder.to);
            child_div.style.backgroundColor = "blue";
            blue_prev = ladder.to;
          } else {
            child_div = document.getElementById(blue_prev + random);
            child_div.style.backgroundColor = "blue";
            blue_prev = blue_prev + random;
          }
        }

        chance = !chance;
      }
    }

    if (red_prev === 100) {
      alert("red player have Won the game!");
    } else if (blue_prev === 100) {
      alert("blue player have won the game");
    }
  

  dice_result.innerHTML = random;
});
