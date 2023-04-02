let lives = 10;
let score = 0;

function randm() {
    if (lives > 0) {
        let firstNumber = Math.floor(Math.random() * (10 - 0) + 0);
        let secondNumber = Math.floor(Math.random() * (10 - 0) + 0);
        let thirdNumber = Math.floor(Math.random() * (10 - 0) + 0);

        switch (true) {
            case firstNumber === 7 && secondNumber === 7 && thirdNumber === 7:
                alert("GANASTE");
                score += 100;
                break;
            case firstNumber === secondNumber && secondNumber === thirdNumber && firstNumber !== 7:
                console.log("Tres números iguales diferentes a 7");
                score += 80;
                break;
            case (firstNumber === 7 && secondNumber === 7) || (firstNumber === 7 && thirdNumber === 7) || (secondNumber === 7 && thirdNumber === 7):
                console.log("Dos números iguales a 7");
                score += 50;
                break;
            case (firstNumber === secondNumber && firstNumber !== 7) || (firstNumber === thirdNumber && firstNumber !== 7) || (secondNumber === thirdNumber && secondNumber !== 7):
                console.log("Dos números iguales diferentes a 7");
                score += 30;
                break;
            default:
                console.log("Ninguna condición se cumple");
                score += 0;
                break;
        }

        document.getElementById("firstNumber").value = firstNumber;
        document.getElementById("secondNumber").value = secondNumber;
        document.getElementById("thirdNumber").value = thirdNumber;

        lives--;
        document.getElementById("lives").textContent = lives;
    }

    if (lives === 0) {
        document.getElementById("play").disabled = true;
        document.getElementById("score").textContent = "Tu puntaje es:" + score;
    }
}