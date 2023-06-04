const flipButton = document.getElementById("flip-btn");
const nextButton = document.getElementById("next-btn");
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");

const card = document.querySelector(".card");

const flashcards = [
    {
        question: "assets/img/course/game/Tka.png",
        answer: "assets/img/course/game/ka.png"
    },
    {
        question: "assets/img/course/game/tkha.png",
        answer: "assets/img/course/game/kha.png"
    },
    {
        question: "assets/img/course/game/Tga.png",
        answer: "assets/img/course/game/ga.png"
    },
    {
        question: "assets/img/course/game/Tnga.png",
        answer: "assets/img/course/game/nga.png"
    },
    {
        question: "assets/img/course/game/Tcha.png",
        answer: "assets/img/course/game/cha.png"
    },
    {
        question: "assets/img/course/game/Tchha.png",
        answer: "assets/img/course/game/chha.png"
    },
    {
        question: "assets/img/course/game/Tja.png",
        answer: "assets/img/course/game/ja.png"
    },
    {
        question: "assets/img/course/game/Tnya.png",
        answer: "assets/img/course/game/nya.png"
    },
    {
        question: "assets/img/course/game/Tta.png",
        answer: "assets/img/course/game/taEng.png"
    },
    {
        question: "assets/img/course/game/Ttta.png",
        answer: "assets/img/course/game/taaeng.png"
    },
    {
        question: "assets/img/course/game/Tda.png",
        answer: "assets/img/course/game/da.png"
    },
    {
        question: "assets/img/course/game/Tna.png",
        answer: "assets/img/course/game/na.png"
    },
    {
        question: "assets/img/course/game/Tpa.png",
        answer: "assets/img/course/game/pa.png"
    },
    {
        question: "assets/img/course/game/Tppa.png",
        answer: "assets/img/course/game/ppa.png"
    },
    {
        question: "assets/img/course/game/Tba.png",
        answer: "assets/img/course/game/ba.png"
    },
    {
        question: "assets/img/course/game/Tma.png",
        answer: "assets/img/course/game/ma.png"
    },
    {
        question: "assets/img/course/game/Ttsa.png",
        answer: "assets/img/course/game/tsaeng.png"
    },
    {
        question: "assets/img/course/game/Ttssa.png",
        answer: "assets/img/course/game/tssa.png"
    },
    {
        question: "assets/img/course/game/Tdza.png",
        answer: "assets/img/course/game/dza.png"
    },
    {
        question: "assets/img/course/game/Twa.png",
        answer: "assets/img/course/game/wa.png"
    },
    {
        question: "assets/img/course/game/Tzha.png",
        answer: "assets/img/course/game/zha.png"
    },
    {
        question: "assets/img/course/game/Tza.png",
        answer: "assets/img/course/game/za.png"
    },
    {
        question: "assets/img/course/game/Taa.png",
        answer: "assets/img/course/game/aa.png"
    },
    {
        question: "assets/img/course/game/Tya.png",
        answer: "assets/img/course/game/ya.png"
    },
    {
        question: "assets/img/course/game/Tra.png",
        answer: "assets/img/course/game/ra.png"
    },
    {
        question: "assets/img/course/game/Tla.png",
        answer: "assets/img/course/game/la.png"
    },
    {
        question: "assets/img/course/game/Tsha.png",
        answer: "assets/img/course/game/sha.png"
    },
    {
        question: "assets/img/course/game/Tsa.png",
        answer: "assets/img/course/game/tsaeng.png"
    },
    {
        question: "assets/img/course/game/Tha.png",
        answer: "assets/img/course/game/ha.png"
    },
    {
        question: "assets/img/course/game/Ta.png",
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
