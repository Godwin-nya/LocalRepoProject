 const gameNames = [
        'book','pen','ruler','erazer','crayon','setsquare',
        'pencil','bag','chalk','marker','drawing-board',
        'clipper','computer','chair'
    ];

    // -----------------------------
    // 1. PROMPT VERSION
    // -----------------------------
    let playGame = prompt("Enter any Stationery Item");

    function validateInput(selection) {
        // Check if selection is a number
        if (!isNaN(selection)) {
            return "Numbers are not allowed!";
        }

        // Check if empty
        if (!selection || selection.trim() === "") {
            return "You didn't type anything!";
        }

        // Check list
        if (gameNames.includes(selection.toLowerCase())) {
            return `Correct! "${selection}" is in the list.`;
        } else {
            return `"${selection}" is NOT in the stationery list.`;
        }
    }

    // Run the prompt result
    console.log(validateInput(playGame));

    // -----------------------------
    // 2. HTML INPUT VERSION
    // -----------------------------
    function playFromInput() {
        let selection = document.getElementById("itemInput").value;
        let message = validateInput(selection);
        document.getElementById("result").innerText = message;
    }

    // -----------------------------
    // 3. RANDOM GAME
    // -----------------------------
    function randomGame() {
        let randomItem = gameNames[Math.floor(Math.random() * gameNames.length)];
        document.getElementById("randomResult").innerText =
            "Randomly picked: " + randomItem;
    }

