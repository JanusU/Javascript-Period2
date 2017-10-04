var jokes = [
    "Her en en dårlig joke1",
    "Her en en dårlig joke2",
    "Her en en dårlig joke3"
];

function _getRandomJoke(){
    return jokes[Math.random(jokes.length)]
}

function _addJoke(string){
    jokes.push(string);
}

module.exports = {
    allJokes : jokes,
    getRandomJoke : _getRandomJoke,
    addJoke : _addJoke
}