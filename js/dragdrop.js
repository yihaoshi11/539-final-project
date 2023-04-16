document.querySelectorAll(".draggable-item").forEach((item) => {
    item.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", e.target.id);
    })
})

document.querySelectorAll(".droppable-area").forEach((area) => {
    area.addEventListener("dragover", (e) => {
        e.preventDefault();
    })

    area.addEventListener("drop", (e) => {
        e.preventDefault();
        const itemId = e.dataTransfer.getData("text/plain");
        e.target.appendChild(document.getElementById(itemId));
    })
})

document.getElementById("check-result").addEventListener("click", () => {
    const matches = [
        { item: "agency", area: "agency-def" },
        { item: "binary", area: "binary-def" },
        { item: "equality", area: "equality-def" },
        { item: "equity", area: "equity-def" },
        { item: "feminism", area: "feminism-def" },
        { item: "gender", area: "gender-def" },
        { item: "hegemony", area: "hegemony-def" },
        { item: "heteronormativity", area: "heteronormativity-def" },
        { item: "intersectionality", area: "intersectionality-def" },
        { item: "oppression", area: "oppression-def" },
        { item: "patriarchy", area: "patriarchy-def" },
        { item: "sexism", area: "sexism-def" },
    ];

    let correct = true;
    matches.forEach((match) => {
        const area = document.getElementById(match.area);
        if (area.children.length === 0 || area.children[0].id !== match.item) {
            correct = false;
        }
    })

    const gameResult = document.getElementById("game-result");
    const gameStatus = document.getElementById("game-status");
    if (correct) {
        gameStatus.innerText = "🎉 Good job! You matched all words correctly!";
        gameStatus.classList.remove("incorrect");
        gameStatus.classList.add("correct");
    } else {
        gameStatus.innerText = "😞 Oops! Some words are incorrectly matched. Please try again!";
        gameStatus.classList.remove("correct");
        gameStatus.classList.add("incorrect");
    }
    gameResult.style.display = "block";
})


function shuffleDefinition(definition) {
    for (let i = definition.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [definition[i], definition[j]] = [definition[j], definition[i]];
    }
    return definition;
}

document.getElementById("shuffle-button").addEventListener("click", () => {
    const definitionArray = Array.from(document.querySelectorAll(".droppable-area"));
    const shuffledAreas = shuffleDefinition(definitionArray);

    const droppableAreas = document.getElementById("droppable-areas");
    droppableAreas.innerHTML = "";
    shuffledAreas.forEach(area => droppableAreas.appendChild(area));
})
