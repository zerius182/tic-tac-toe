const playerFactory = (marker, playerName) =>{
    //Need to remove console logs once I've finished
    let currentScore = 0;
    let playerMarker = marker;
    let _playerName = playerName;
    let active = false;

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

    const setActive = () =>{
        console.log(`${_playerName} is now the active player`)
        active = true;
        return active;
    }

    const setWaiting = () =>{
        console.log(`${_playerName} is now inactive`)
        active = false;
        return active;
    }

    const showActiveStatus = () =>{
        console.log(`${_playerName}s active status is ${active}`)
        return active;
    }

    return{
        getWinCount,
        victory,
        getMarker,
        getPlayerName,
        setActive,
        setWaiting,
        showActiveStatus,
    }
}

const playerOne = playerFactory("X", "Player One");
const playerTwo = playerFactory("0", "Player Two");
let _active = playerOne;
playerOne.setActive();

const gameModule =( () =>{
    let gameArray = ["","","","","","","","",""];

    const arrayTopLeft = () => gameArray[0] = _active.getMarker();
    const arrayTopMiddle = () => gameArray[1] = _active.getMarker();
    const arrayTopRight = () => gameArray[2] = _active.getMarker();
    const arrayLeft = () => gameArray[3] = _active.getMarker();
    const arrayMiddle = () => gameArray[4] = _active.getMarker();
    const arrayRight = () => gameArray[5] = _active.getMarker();
    const arrayBottomLeft = () => gameArray[6] = _active.getMarker();
    const arrayBottomMiddle = () => gameArray[7] = _active.getMarker();
    const arrayBottomRight = () => gameArray[8] = _active.getMarker();

    return{
        arrayTopLeft,
        arrayTopMiddle,
        arrayTopRight,
        arrayLeft,
        arrayMiddle,
        arrayRight,
        arrayBottomLeft,
        arrayBottomMiddle,
        arrayBottomRight
    }
})()
const gameController = gameModule;

const displaymodule =( () =>{
    const playerOneName = document.querySelector("#player-one-name");
    const playerTwoName = document.querySelector("#player-two-name");

    const playerOneScore = document.querySelector("#player-one-score");
    const playerTwoScore = document.querySelector("#player-two-score");

    const topLeft = document.querySelector("#top-left");
    const topMiddle = document.querySelector("#top-middle");
    const topRight = document.querySelector("#top-right");
    const left = document.querySelector("#left");
    const middle = document.querySelector("#middle");
    const right = document.querySelector("#right");
    const bottomLeft = document.querySelector("#bottom-left");
    const bottomMiddle = document.querySelector("#bottom-middle");
    const bottomRight = document.querySelector("#bottom-right");


    const setUpBoard = () =>{
        playerOneName.textContent = playerOne.getPlayerName();
        playerTwoName.textContent = playerTwo.getPlayerName();
        playerOneScore.textContent = playerOne.getWinCount();
        playerTwoScore.textContent = playerTwo.getWinCount();
    }

    const placeMarker = (e) =>{
        if(playerOne.showActiveStatus() === true){
            e.target.textContent = playerOne.getMarker();
            playerOne.setWaiting();
            _active = playerTwo;      
        }
        else{
            e.target.textContent = playerTwo.getMarker();
            playerOne.setActive();
            _active = playerOne;
        }
    }
    const topLeftPlace = (e) =>{
        if (topLeft.textContent ===""){
            placeMarker(e);
            gameController.arrayTopLeft;
        }
    }

    const topMiddlePlace = (e) =>{
        if (topMiddle.textContent ===""){
            placeMarker(e);
            gameController.arrayTopMiddle;
        }
    }

    const topRightPlace = (e) =>{
        if (topRight.textContent ===""){
            placeMarker(e);
            gameController.arrayTopRight;
        }
    }

    const leftPlace = (e) =>{
        if (left.textContent ===""){
            placeMarker(e);
            gameController.arrayLeft;
        }
    }

    const middlePlace = (e) =>{
        if (middle.textContent ===""){
            placeMarker(e);
            gameController.arrayMiddle;
        }
    }

    const rightPlace = (e) =>{
        if (right.textContent ===""){
            placeMarker(e);
            gameController.arrayRight;
        }
    }

    const bottomLeftPlace = (e) =>{
        if (bottomLeft.textContent ===""){
            placeMarker(e);
            gameController.array.bottomLeft;
        }
    }

    const bottomMiddlePlace = (e) =>{
        if (bottomMiddle.textContent ===""){
            placeMarker(e);
            gameController.arrayBottomMiddle;
        }
    }

    const bottomRightPlace = (e) =>{
        if (bottomRight.textContent ===""){
            placeMarker(e);
            gameController.arrayBottomRight;
        }
    }

    topLeft.addEventListener("click", topLeftPlace);
    topMiddle.addEventListener("click", topMiddlePlace);
    topRight.addEventListener("click", topRightPlace);
    left.addEventListener("click", leftPlace);
    middle.addEventListener("click", middlePlace);
    right.addEventListener("click", rightPlace);
    bottomLeft.addEventListener("click", bottomLeftPlace);
    bottomMiddle.addEventListener("click", bottomMiddlePlace);
    bottomRight.addEventListener("click", bottomRightPlace);

    return{
        setUpBoard,
        
    }
})();

const displayController = displaymodule;
displayController.setUpBoard();