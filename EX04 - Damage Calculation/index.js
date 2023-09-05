class Player01 {
    constructor(namePlayer01, nameATK, ATK) {
        this.namePlayer01 = namePlayer01;
        this.nameATK = nameATK;
        this.ATK = ATK;
    }
}

class Player02 {
    constructor(namePlayer02, HP,  DEF, SHD) {
        this.namePlayer02 = namePlayer02;
        this.HP = HP;
        this.DEF = DEF;
        this.SHD = SHD;
    }
}

function getInfo() {
    let namePlayer01 = prompt("Player 1 - Enter your name:");
    let nameATK = prompt("Player 1 - Enter your attack name:");
    let ATK = parseFloat(prompt("Player 1 - Enter your attack value:"));

    let player01 = new Player01(namePlayer01, nameATK, ATK);

    let namePlayer02 = prompt("Player 2 - Enter your name:");
    let HP = parseFloat(prompt("Player 2 - Enter your life points:"));
    let DEF = parseFloat(prompt("Player 2 - Enter your defense value:"));
    let SHD = prompt("Player 2 - Do you want to use a shield? Y/N").toUpperCase();

    let player02 = new Player02(namePlayer02, HP, DEF, SHD);

    combatWinner({ player01 }, { player02 });
}

function combatWinner({ player01 }, { player02 }) {
    if (player01.ATK > player02.DEF && player02.SHD === "N") {
        player01.ATK -= player02.DEF;
        alert("Player 1's attack" + player01.nameATK + " with a value of " + player01.ATK + " was successful! Player 2 has no shield and suffered a total damage of " + player02.DEF + ".");
    } else if (player01.ATK > player02.DEF && player02.SHD === "Y") {
        player01.ATK -= player02.DEF / 2;
        alert("Player 1's attack" + player01.nameATK + " with a value of " + player01.ATK + " was successful! Player 2 has an active shield, the damage was reduced by half to " + player02.DEF / 2 + ".");
    } else {
        player01.ATK = 0;
        alert("Player 2 successfully defended! Player 1's attack " + player01.nameATK + " was completely blocked.");
    }
}

getInfo()