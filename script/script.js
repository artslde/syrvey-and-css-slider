let allAnswer = {
  first: "1",
  second: "1",
  third: "1",
  fourh: "1",
  fifth: "1",
};

let button = document.getElementById("check");

button.addEventListener("click", checkAnswer);

function checkAnswer() {
  let answerOne = document.getElementById("quest-one").value;
  let answerTwo = document.getElementById("quest-two").value;
  let answerThree = document.getElementById("quest-three").value;
  let answerFour = document.getElementById("quest-four").value;
  let answerFive = document.getElementById("quest-five").value;

  let result = 0;

  if (answerOne === allAnswer.first) result++;
  if (answerTwo === allAnswer.second) result++;
  if (answerThree === allAnswer.third) result++;
  if (answerFour === allAnswer.fourh) result++;
  if (answerFive === allAnswer.fifth) result++;

  console.log(result);

  if (result === 5) {
    let victory = document.querySelector(".display-none");
    let quest = document.querySelector(".quest");

    quest.classList.add("display-none");

    victory.classList.remove("display-none");
  } else alert("Answer to all question");
}

let secondButton = document.getElementById("hint");

secondButton.addEventListener("click", showHint);

function showHint() {
  alert("check");
}
