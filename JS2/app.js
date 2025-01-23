let name = prompt('Entry your word')
let emty_word = ''
const vowels = "eyuioa"

for (let i of name){
    if (vowels.includes(i)){
        emty_word += i +'naggets' 
    }else{
        emty_word += i
    }
}
alert(`slovo:${emty_word}`)    

let decrypted_word = emty_word.replace(/naggets/g, '')
alert(`Decrypted word: ${decrypted_word}`);






// your welcome 221930108 article