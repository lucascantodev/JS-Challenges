function addPlayer() {
    const position = document.getElementById("position").value;
    const name = document.getElementById("name").value;
    const number = document.getElementById("number").value;

    const confirmation = confirm(`Scale ${name} as ${position}`);

    if (confirmation) {
        const teamList = document.getElementById("team-list");
        const playerItem = document.createElement("li");
        const playerId = `Player - ${number}`;
        playerItem.id = playerId;
        playerItem.innerText = `${position}: ${name} (${number})`;
        teamList.appendChild(playerItem);

        document.getElementById("position").value = "";
        document.getElementById("name").value = "";
        document.getElementById("number").value = "";
    }
}

function removePlayer() {
    const number = document.getElementById("numberToRemove").value;
    const playerToRemove = document.getElementById(`Player - ${number}`);
    const playerName = playerToRemove.innerText;

    const confirmation = confirm(`Remove the player ${playerToRemove.innerText} ?`);

    if (confirmation) {
        document.getElementById("team-list").removeChild(playerToRemove);
        document.getElementById("numberToRemove").value = "";
    }
    
    alert(`${playerName} was removed`);
}