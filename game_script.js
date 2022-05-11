const playerFactory = (marker, playerName) =>{

    let currentScore = 0;
    let playerMarker = marker;
    let _playerName = playerName;

    const getWinCount = () =>{
        console.log(`${_playerName} currently has ${currentScore} points`)
        return currentScore;
    }

    const victory = () =>{
        console.log(`${_playerName} has just won a round!`)
        return currentScore ++;
    }

    const getMarker = () =>{
        console.log(`${_playerName} is using ${playerMarker}`)
        return playerMarker;
    }

    const getPlayerName = () =>{
        console.log(`This player is named ${_playerName}`)
        return _playerName;
    }

    return{
        getWinCount,
        victory,
        getMarker,
        getPlayerName
    }
}

const playerOne = playerFactory("x", "Player One");
const playerTwo = playerFactory("0", "Player Two");
//To go into module!

const playerOneName = document.querySelector("#player-one-name");
playerOneName.textContent = playerOne.getPlayerName();
const playerTwoName = document.querySelector("#player-two-name");
playerTwoName.textContent = playerTwo.getPlayerName();

const playerOneScore = document.querySelector("#player-one-score");
playerOneScore.textContent = playerOne.getWinCount();
const playerTwoScore = document.querySelector("#player-two-score");
playerTwoScore.textContent = playerTwo.getWinCount();
//End Module!

const gameBoard = () =>{
    let gameArray = ["","","","","","","","",""];
}