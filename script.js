let words = [
  {
    word: "математика",
    hint: "те що навчає дітей рахувати",
  },
  {
    word: "зустріч",
    hint: "подія коли люди збираються разом",
  },
  {
    word: "число",
    hint: "математична одиниця для рахування",
  },
  {
    word: "обмін",
    hint: "коли щось отримуєш замість чогось іншого",
  },
  {
    word: "полотно",
    hint: "на цьому малюють художники",
  },
  {
    word: "квіти",
    hint: "гарні пахучі вирощують в саду",
  },
  {
    word: "локація",
    hint: "там де перебуває людина",
  },
  {
    word: "пір`я",
    hint: "те чим покриті птахи",
  },
  {
    word: "комфорт",
    hint: "приємне відчуття затишку",
  },
  {
    word: "язик",
    hint: "орган відчуттів у роті",
  },
  {
    word: "розширення",
    hint: "збільшення у розмірі",
  },
  {
    word: "країна",
    hint: "політично та територіально виокремленний регіон",
  },
  {
    word: "група",
    hint: "певне число людей",
  },
  {
    word: "смак",
    hint: "можливість відчувати іжу",
  },
  {
    word: "магазин",
    hint: "там де купують товари",
  },
  {
    word: "поле",
    hint: "ділянка для фермерської діяльності",
  },
  {
    word: "яблуко",
    hint: "солодкий соковитий фрукт",
  },
  {
    word: "гаманець",
    hint: "там де люди зберігають гроші",
  },
  {
    word: "голка",
    hint: "тонкий шматок металу для шиття",
  },
  {
    word: "експерт",
    hint: "людина з поглибленними знаннями у певній сфері",
  },
  {
    word: "папір",
    hint: "те на чому пишуть",
  },
  {
    word: "секунда",
    hint: "найменша одиниця виміру часу",
  },
  {
    word: "бібліотека",
    hint: "місце де можна почитати книги",
  },
];

const wordText = document.querySelector(".word"),
  hintText = document.querySelector(".hint span"),
  timeText = document.querySelector(".time b"),
  inputField = document.querySelector("input"),
  refreshBtn = document.querySelector(".refresh-word"),
  checkBtn = document.querySelector(".check-word");

let correctWord, timer;

const initTimer = (maxTime) => {
  clearInterval(timer);
  timer = setInterval(() => {
    if (maxTime > 0) {
      maxTime--;
      return (timeText.innerText = maxTime);
    }
    alert(`Time off! ${correctWord.toUpperCase()} was the correct word`);
    initGame();
  }, 1000);
};

const initGame = () => {
  initTimer(30);
  let randomObj = words[Math.floor(Math.random() * words.length)];
  let wordArray = randomObj.word.split("");
  for (let i = wordArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
  }
  wordText.innerText = wordArray.join("");
  hintText.innerText = randomObj.hint;
  correctWord = randomObj.word.toLowerCase();
  inputField.value = "";
  inputField.setAttribute("maxlength", correctWord.length);
};
initGame();

const checkWord = () => {
  let userWord = inputField.value.toLowerCase();
  if (!userWord) return alert("Введіть слово для перевірки!");
  if (userWord !== correctWord)
    return alert(`Упс! ${userWord} - це не те слово :(`);
  alert(`Вітаємо! ${correctWord.toUpperCase()} - це вірне слово!`);
  initGame();
};

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);
