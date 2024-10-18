let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");

let val = true;
let gameActive = true;
let board = ["", "", "", "", "", "", "", "", ""];

const winningcondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkWinner() {
    for (let i = 0; i < winningcondition.length; i++) {
        const [a, b, c] = winningcondition[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a]; // Return 'X' or '0' if there is a winner
        }
    }
    return null;
}

function checkDraw() {
    return board.every(box => box !== "");
}

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        if (!gameActive || board[index] !== "") return;

        if (val) {
            box.textContent = "0";
            board[index] = "0";
        } else {
            box.textContent = "X";
            board[index] = "X";
        }
        val = !val;
        box.disabled = true;

        const winner = checkWinner();
        if (winner) {
            gameActive = false;
            alert(`${winner} wins!`);
        } else if (checkDraw()) {
            gameActive = false;
            alert("It's a draw!");
        }
    });
});

resetbtn.addEventListener("click", () => {
    // Reset the game
    board = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    val = true;

    boxes.forEach(box => {
        box.textContent = "";
        box.disabled = false;
    });
});
