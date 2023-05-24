const flipButton = document.getElementById("flip-btn");
const nextButton = document.getElementById("next-btn");
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");

const card = document.querySelector(".card");

const flashcards = [
    {
        question: "assets/img/course/game/tka.png",
        answer: "assets/img/course/game/ka.png"
    },
    {
        question: "assets/img/course/game/tkha.png",
        answer: "assets/img/course/game/kha.png"
    },
    {
        question: "assets/img/course/game/tga.png",
        answer: "assets/img/course/game/ga.png"
    },
    {
        question: "assets/img/course/game/tnga.png",
        answer: "assets/img/course/game/nga.png"
    },
    {
        question: "assets/img/course/game/tcha.png",
        answer: "assets/img/course/game/cha.png"
    },
    {
        question: "assets/img/course/game/tchha.png",
        answer: "assets/img/course/game/chha.png"
    },
    {
        question: "assets/img/course/game/tja.png",
        answer: "assets/img/course/game/ja.png"
    },
    {
        question: "assets/img/course/game/tnya.png",
        answer: "assets/img/course/game/nya.png"
    },
    {
        question: "assets/img/course/game/tta.png",
        answer: "assets/img/course/game/taeng.png"
    },
    {
        question: "assets/img/course/game/ttta.png",
        answer: "assets/img/course/game/ttaeng.png"
    },
    {
        question: "assets/img/course/game/tda.png",
        answer: "assets/img/course/game/da.png"
    },
    {
        question: "assets/img/course/game/tna.png",
        answer: "assets/img/course/game/na.png"
    },
    {
        question: "assets/img/course/game/tpa.png",
        answer: "assets/img/course/game/pa.png"
    },
    {
        question: "assets/img/course/game/tppa.png",
        answer: "assets/img/course/game/ppa.png"
    },
    {
        question: "assets/img/course/game/tba.png",
        answer: "assets/img/course/game/ba.png"
    },
    {
        question: "assets/img/course/game/tma.png",
        answer: "assets/img/course/game/ma.png"
    },
    {
        question: "assets/img/course/game/ttsa.png",
        answer: "assets/img/course/game/tsaeng.png"
    },
    {
        question: "assets/img/course/game/ttssa.png",
        answer: "assets/img/course/game/tssa.png"
    },
    {
        question: "assets/img/course/game/tdza.png",
        answer: "assets/img/course/game/dza.png"
    },
    {
        question: "assets/img/course/game/twa.png",
        answer: "assets/img/course/game/wa.png"
    },
    {
        question: "assets/img/course/game/tzha.png",
        answer: "assets/img/course/game/zha.png"
    },
    {
        question: "assets/img/course/game/tza.png",
        answer: "assets/img/course/game/za.png"
    },
    {
        question: "assets/img/course/game/taa.png",
        answer: "assets/img/course/game/aa.png"
    },
    {
        question: "assets/img/course/game/tya.png",
        answer: "assets/img/course/game/ya.png"
    },
    {
        question: "assets/img/course/game/tra.png",
        answer: "assets/img/course/game/ra.png"
    },
    {
        question: "assets/img/course/game/tla.png",
        answer: "assets/img/course/game/la.png"
    },
    {
        question: "assets/img/course/game/tsha.png",
        answer: "assets/img/course/game/sha.png"
    },
    {
        question: "assets/img/course/game/tsa.png",
        answer: "assets/img/course/game/tsaeng.png"
    },
    {
        question: "assets/img/course/game/tha.png",
        answer: "assets/img/course/game/ha.png"
    },
    {
        question: "assets/img/course/game/ta.png",
        answer: "assets/img/course/game/a.png"
    }

];

let currentFlashcardIndex = 0;

function showFlashcard() {
    const currentFlashcard = flashcards[currentFlashcardIndex];
    questionElement.src = currentFlashcard.question;
    answerElement.src = currentFlashcard.answer;
    card.classList.remove("flipped");
}

function flipCard() {
    card.classList.toggle("flipped");
}

function nextFlashcard() {
    currentFlashcardIndex++;
    if (currentFlashcardIndex >= flashcards.length) {
        currentFlashcardIndex = 0;
    }
    showFlashcard();
}

flipButton.addEventListener("click", flipCard);
nextButton.addEventListener("click", nextFlashcard);

// Show the first flashcard on page load
document.addEventListener("DOMContentLoaded", showFlashcard);
