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
