const playerFactory = marker =>{
    let currentScore = 0;
    let playerMarker = marker;
    const getWinCount = () =>{
        return currentScore;
    }

    const victory = () =>{
        return currentScore ++;
    }

    const getMarker = () =>{
        return playerMarker;
    }

    return{
        getWinCount,
        victory,
        getMarker
    }
}
