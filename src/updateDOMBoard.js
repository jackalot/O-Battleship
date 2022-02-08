function updateDOMBoard(myPlayer, searchQuery)
{
    //  Allows you to apply any click EventListener to any function
    function applyClickEvent(element, function) {
        element.addEventListener('click', function);
    }
    //  Allows you to remove any Click EventListener from any element
    function removeClickEvent(element, function) {
        element.removeEventListener('click', function);
    }
    function searchShip(coordinate) {
        const result = myPlayer.ourBoard.findFirstShip(coordinate);
        return result;
    }
    function searchMiss(coordinate) {
        const result = myPlayer.ourBoard.checkMissesAndHits(coordinate);
        if(result === 'Miss')
        {
            return true;
        }
        return false;
    }
    function searchHit(coordinate) {
        const result = myPlayer.ourBoard.checkMissesAndHits(coordinate);
        if(result === 'Hit')
        {
            return true;
        }
        return false;
    }
    function checkBox(coordinate, temporaryBox) {
        const hitResult = searchHit(coordinate);
        const missResult = searchMiss(coordinate);
        const shipResult = searchMiss(coordinate);
        if(hitResult === true)
        {
            temporaryBox.classList.add('.hit');
            removeEvent();
        }
        else if(missResult === true)
        {
            temporaryBox.classList.add('.miss');
            removeEvent();
        }
        else if(shipResult === true)
        {
            temporaryBox.classList.add('.containsShip');
            applyEvent();
        }
        else if(hitResult === false && missResult === false && shipResult === false)
        {
            applyEvent();
        }
    }
    function findInRow(row, collumn)
    {
        for(let i = 1; i < 10; i += 1)
        {
            const currentBox = document.querySelector(`${queryString}-${collumn}-${i}`);
            checkBox({ x: collumn, y: i}, currentBox);
        }
    }
    function sendNextCollumn()
    {
        //  this funcions main purpose is to send a collumn to findInRow();
        for(let i = 0; i < 10; i += 1)
        {
            findInRow(i, searchHit)
            findInRow(i, searchMiss)
            findInRow(i, searchShip)
        }
    }
}
module.exports = updateDOMBoard;