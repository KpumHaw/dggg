document.addEventListener('DOMContentLoaded', () => {

   
const questions = [
  {
    question: "Що з цього є роботом?",
    answers: [
      { name: "Робот", image: "https://media.istockphoto.com/id/2153255114/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA%D0%BE%D0%BF%D0%BE%D0%B4%D0%BE%D0%B1%D0%BD%D1%8B%D0%B9-%D1%80%D0%BE%D0%B1%D0%BE%D1%82-%D0%BA%D0%B8%D0%B1%D0%BE%D1%80%D0%B3.jpg?s=612x612&w=0&k=20&c=9QRMODSJhNIG6MkvKzyTnNUoXHE4OG6eJD94AqeWT-8=" },
      { name: "Гітара", image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400" },
      { name: "Кактус", image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400" },
      { name: "Велосипед", image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=400" }
    ],
    correct: "Робот",
    info: "Робот може виконувати запрограмовані дії."
  },
  {
    question: "Яка картинка представляє Python?",
    answers: [
      { name: "Яблуко", image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400" },
      { name: "Python", image: "https://www.python.org/static/community_logos/python-logo.png" },
      { name: "М'яч", image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=400" },
      { name: "Літак", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400" }
    ],
    correct: "Python",
    info: "Python — популярна мова програмування."
  },
  {
    question: "Чим керують курсором комп'ютера?",
    answers: [
      { name: "Навушники", image: "https://images.avrora.ua/images/detailed/65/96294_001.jpg " },
      { name: "Мишка", image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400" },
      { name: "Мікрофон", image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400" },
      { name: "Камера", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400" }
    ],
    correct: "Мишка",
    info: "Комп'ютерна мишка допомагає керувати курсором."
  },
  {
    question: "Яка картинка пов'язана з HTML-кодом?",
    answers: [
      { name: "Піца", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400" },
      { name: "Футбол", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400" },
      { name: "HTML-код", image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400" },
      { name: "Веселка", image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400" }
    ],
    correct: "HTML-код",
    info: "HTML використовують для створення структури вебсторінок."
  },
  {
    question: "Що допомагає виконувати завдання крок за кроком?",
    answers: [
      { name: "Алгоритм", image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400" },
      { name: "Морозиво", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400" },
      { name: "Фарби", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400" },
      { name: "Самокат", image: "https://budpostach.ua/image/cache/catalog/image/cache/catalog/easyphoto/10976/dityachiy-samokat-x-treme-ks-210l-rozheviy-10-1200x1200.webp"},
    ],
    correct: "Алгоритм",
    info: "Алгоритм — це послідовність кроків для розв'язання завдання."
  },
  {
    question: "Який пристрій показує зображення на великому екрані?",
    answers: [
      { name: "Клавіатура", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400" },
      { name: "Принтер", image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400" },
      { name: "Проєктор", image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=400" },
      { name: "Мікрофон", image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400" }
    ],
    correct: "Проєктор",
    info: "Проєктор виводить зображення на великий екран або стіну."
  },
   {
    question: "Що використовують для створення інтерактивних елементів на сайтах?",
    answers: [
      { name: "JavaScript", image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400" },
      { name: "HTML", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400" },
      { name: "CSS", image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400" },
      { name: "Photoshop", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400" }
    ],
    correct: "JavaScript",
    info: "JavaScript робить вебсторінки інтерактивними та живими."
  },
  {
    question: "Який пристрій використовується для введення тексту?",
    answers: [
      { name: "Монітор", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400" },
      { name: "Клавіатура", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400" },
      { name: "Принтер", image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400" },
      { name: "Навушники", image: "https://images.avrora.ua/images/detailed/65/96294_001.jpg" }
    ],
    correct: "Клавіатура",
    info: "Клавіатура — це основний пристрій для введення текстової інформації."
  },
   {
    question: "Що означає абревіатура «WWW» у веб-адресах?",
    answers: [
      { name: "World Wide Web", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400" },
      { name: "Web World Window", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400" },
      { name: "Wide World Web", image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400" },
      { name: "Web Wide Work", image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400" }
    ],
    correct: "World Wide Web",
    info: "World Wide Web перекладається як «Всесвітня павутина»."
  },
   {
    question: "Як називається секретний код для захисту твого облікового запису?",
    answers: [
      { name: "Пароль", image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400" },
      { name: "Логін", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400" },
      { name: "Посилання", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400" },
      { name: "Клік", image: "https://images.unsplash.com/photo-1616469829941-c7200edec809?w=400" }
    ],
    correct: "Пароль",
    info: "Пароль захищає твої дані від сторонніх."
  }
];

let current = 0;
let score = 0;
let answered = false;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next");
const gameEl = document.getElementById("game");
const resultEl = document.getElementById("result");

function showQuestion() {
  answered = false;

  const q = questions[current];

  document.getElementById("number").textContent =
    `Раунд ${current + 1} із ${questions.length}`;

  document.getElementById("score").textContent =
    `⭐ ${score} балів`;

  document.getElementById("progress-bar").style.width =
    `${(current / questions.length) * 100}%`;

  questionEl.textContent = q.question;
  answersEl.innerHTML = "";
  feedbackEl.textContent = "";
  nextBtn.hidden = true;

  // Перемішуємо відповіді
  const shuffled = [...q.answers];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  shuffled.forEach(answer => {
    const btn = document.createElement("button");
    btn.className = "answer";

    const img = document.createElement("img");
    img.src = answer.image;
    img.alt = answer.name;
    img.loading = "lazy";

    img.onerror = () => {
      img.onerror = null;
      img.src = "https://placehold.co/400x250/211d3b/ffffff?text=Image";
    };

    const label = document.createElement("div");
    label.className = "label";
    label.textContent = answer.name;

    btn.append(img, label);

    btn.addEventListener("click", () => {
      checkAnswer(btn, answer);
    });

    answersEl.appendChild(btn);
  });
}

function checkAnswer(button, answer) {
  if (answered) return;
  answered = true;

  const q = questions[current];

  answersEl.querySelectorAll(".answer").forEach(btn => {
    btn.disabled = true;

    const label = btn.querySelector(".label").textContent;

    if (label === q.correct) {
      btn.classList.add("correct");
    }
  });

  if (answer.name === q.correct) {
    score++;
    feedbackEl.textContent = `✅ Правильно! ${q.info}`;
    feedbackEl.style.color = "#4ade80";
  } else {
    button.classList.add("wrong");
    feedbackEl.textContent =
      `❌ Правильна відповідь: ${q.correct}. ${q.info}`;
    feedbackEl.style.color = "#f87171";
  }

  document.getElementById("score").textContent =
    `⭐ ${score} балів`;

  nextBtn.textContent =
    current === questions.length - 1
      ? "Побачити результат 🏆"
      : "Наступне запитання ➜";

  nextBtn.hidden = false;
}

function showResult() {
  // Зупиняємо таймер при успішному завершенні
  clearInterval(timerInterval);

  gameEl.hidden = true;
  resultEl.hidden = false;

  document.getElementById("progress-bar").style.width = "100%";

  document.getElementById("final-score").textContent =
    `${score} із ${questions.length} балів`;

  const message = document.getElementById("message");

  if (score === questions.length) {
    message.textContent = "🔥 Неймовірно! Ти справжній IT-експерт!";
  } else if (score >= 4) {
    message.textContent = "🎉 Чудовий результат! Ти добре знаєш IT!";
  } else {
    message.textContent = "💻 Гарна спроба! Спробуй ще раз!";
  }
}

nextBtn.addEventListener("click", () => {
  if (current < questions.length - 1) {
    current++;
    showQuestion();
  } else {
    showResult();
  }
});

document.getElementById("restart").addEventListener("click", () => {
  current = 0;
  score = 0;
  gameEl.hidden = false;
  resultEl.hidden = true;
  showQuestion();
  startTimer(); // Перезапуск таймера при рестарті гри
});

showQuestion();

// --- ДОДАНО ТАЙМЕР НА 5 ХВИЛИН ТА ТАБЛИЧКУ КІНЦЯ ЧАСУ ---
let timeLeft = 300; // 300 секунд = 5 хвилин
let timerInterval = null;

const timerEl = document.createElement("div");
timerEl.style.cssText = "font-size: 16px; font-weight: bold; color: #facc15; margin-bottom: 8px;";
if (gameEl) {
  gameEl.prepend(timerEl);
}

function startTimer() {
  clearInterval(timerInterval);
  timeLeft = 300;
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      showTimeOutModal();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerEl.textContent = `⏳ Час: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function showTimeOutModal() {
  gameEl.hidden = true;
  resultEl.hidden = false;
  document.getElementById("progress-bar").style.width = "100%";
  document.getElementById("final-score").textContent = `Час вийшов! Набрано балів: ${score} із ${questions.length}`;
  document.getElementById("message").textContent = "⏰ Час закінчився! Натисни «Грати знову», щоб спробувати ще раз.";
}

// Запускаємо таймер при старті
startTimer();
// --------------------------------------------------------

});
