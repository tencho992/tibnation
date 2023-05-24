const flipButton = document.getElementById("flip-btn");
const nextButton = document.getElementById("next-btn");
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");

const card = document.querySelector(".card");

const flashcards = [
    {
        question: "public/assets/imgcourse/game/tka.png",
        answer: "public/assets/imgcourse/game/ka.png"
    },
    {
        question: "public/assets/imgcourse/game/tkha.png",
        answer: "public/assets/imgcourse/game/kha.png"
    },
    {
        question: "public/assets/imgcourse/game/tga.png",
        answer: "public/assets/imgcourse/game/ga.png"
    },
    {
        question: "public/assets/imgcourse/game/tnga.png",
        answer: "public/assets/imgcourse/game/nga.png"
    },
    {
        question: "public/assets/imgcourse/game/tcha.png",
        answer: "public/assets/imgcourse/game/cha.png"
    },
    {
        question: "public/assets/imgcourse/game/tchha.png",
        answer: "public/assets/imgcourse/game/chha.png"
    },
    {
        question: "public/assets/imgcourse/game/tja.png",
        answer: "public/assets/imgcourse/game/ja.png"
    },
    {
        question: "public/assets/imgcourse/game/tnya.png",
        answer: "public/assets/imgcourse/game/nya.png"
    },
    {
        question: "public/assets/imgcourse/game/tta.png",
        answer: "public/assets/imgcourse/game/taeng.png"
    },
    {
        question: "public/assets/imgcourse/game/ttta.png",
        answer: "public/assets/imgcourse/game/ttaeng.png"
    },
    {
        question: "public/assets/imgcourse/game/tda.png",
        answer: "public/assets/imgcourse/game/da.png"
    },
    {
        question: "public/assets/imgcourse/game/tna.png",
        answer: "public/assets/imgcourse/game/na.png"
    },
    {
        question: "public/assets/imgcourse/game/tpa.png",
        answer: "public/assets/imgcourse/game/pa.png"
    },
    {
        question: "public/assets/imgcourse/game/tppa.png",
        answer: "public/assets/imgcourse/game/ppa.png"
    },
    {
        question: "public/assets/imgcourse/game/tba.png",
        answer: "public/assets/imgcourse/game/ba.png"
    },
    {
        question: "public/assets/imgcourse/game/tma.png",
        answer: "public/assets/imgcourse/game/ma.png"
    },
    {
        question: "public/assets/imgcourse/game/ttsa.png",
        answer: "public/assets/imgcourse/game/tsaeng.png"
    },
    {
        question: "public/assets/imgcourse/game/ttssa.png",
        answer: "public/assets/imgcourse/game/tssa.png"
    },
    {
        question: "public/assets/imgcourse/game/tdza.png",
        answer: "public/assets/imgcourse/game/dza.png"
    },
    {
        question: "public/assets/imgcourse/game/twa.png",
        answer: "public/assets/imgcourse/game/wa.png"
    },
    {
        question: "public/assets/imgcourse/game/tzha.png",
        answer: "public/assets/imgcourse/game/zha.png"
    },
    {
        question: "public/assets/imgcourse/game/tza.png",
        answer: "public/assets/imgcourse/game/za.png"
    },
    {
        question: "public/assets/imgcourse/game/taa.png",
        answer: "public/assets/imgcourse/game/aa.png"
    },
    {
        question: "public/assets/imgcourse/game/tya.png",
        answer: "public/assets/imgcourse/game/ya.png"
    },
    {
        question: "public/assets/imgcourse/game/tra.png",
        answer: "public/assets/imgcourse/game/ra.png"
    },
    {
        question: "public/assets/imgcourse/game/tla.png",
        answer: "public/assets/imgcourse/game/la.png"
    },
    {
        question: "public/assets/imgcourse/game/tsha.png",
        answer: "public/assets/imgcourse/game/sha.png"
    },
    {
        question: "public/assets/imgcourse/game/tsa.png",
        answer: "public/assets/imgcourse/game/tsaeng.png"
    },
    {
        question: "public/assets/imgcourse/game/tha.png",
        answer: "public/assets/imgcourse/game/ha.png"
    },
    {
        question: "public/assets/imgcourse/game/ta.png",
        answer: "public/assets/imgcourse/game/a.png"
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
