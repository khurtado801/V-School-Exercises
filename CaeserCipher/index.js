alphabet = "abcdefghijklmnopqrstuvwxyz";

function encoder(input, shift) {
    var newString = "";
    for (var i = 0; i < input.length; i++) {
        var char = input[i];
        var indexOfCharacter = alphabet.indexOf(char);
        var newPosition = indexOfCharacter + shift;
        if (newPosition > 25) {
            newPosition = newPosition - 26;
        }

        var newCharacter = alphabet[newPosition];
        if (indexOfCharacter === -1) {
            newCharacter = char;
        }
        newString += newCharacter
    }
    return newString;
}
console.log(encoder("abc", 1));