const testPlayer = playerFactory("!", "Test Player");

testPlayer.getMarker();
testPlayer.getPlayerName();
testPlayer.getWinCount();
testPlayer.victory();
testPlayer.getWinCount();
testPlayer.setActive();
testPlayer.showActiveStatus();
testPlayer.setWaiting();
testPlayer.showActiveStatus();

winningCombos = [
    [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
]

const checkForWins = () =>{
    let marker = _active.getMarker();
    let winningCombos = [
        [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
    ]
}