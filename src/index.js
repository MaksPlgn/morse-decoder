const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    const arrCodedWords = expr.split('**********');
    const arrDecodedWords = [];

    arrCodedWords.forEach((codedWord, index) => {
        arrCodedWords[index] = breakCodedWord(codedWord);
    });

    arrCodedWords.forEach((codedword, indexWord) => {
        let decodedWord = '';
        codedword.forEach((codedLetter, indexLetter) => {
            
            const morseCode = toMorseCode (codedLetter);
            const decodedLetter = MORSE_TABLE[morseCode];

            decodedWord += decodedLetter;    
        });
        arrDecodedWords.push(decodedWord);
    });

    return arrDecodedWords.join(' ');

}

function breakCodedWord (codedWord) {
    const arrCodedLetters = codedWord.match(/\d{10}/g);

    return arrCodedLetters;
}

function toMorseCode (codedLetter) {

    return codedLetter.replace(/00/g, '')
                      .replace(/10/g, '.')
                      .replace(/11/g, '-');
}

module.exports = {
    decode
}