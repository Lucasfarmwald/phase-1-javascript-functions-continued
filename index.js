function saturdayFun(message = "roller-skate") {
    return (`This Saturday, I want to ${message}!`);
}
function mondayWork(quote = "go to the office") {
    return (`This Monday, I will ${quote}.`);
}

const wrapAdjective = function(flair = "*"){
    return function(word = "special"){
       return (`You are ${flair}${word}${flair}!`)
    }
}