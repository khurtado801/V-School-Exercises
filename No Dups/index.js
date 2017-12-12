var delDupes = function(str) {
    var outputs = {
        noDupes: "",
        dupes: ""
    }

    for (var i = 0; i < str.length; i++) {
        if (!outputs.noDupes.includes(str[i])) {
            outputs.noDupes += str[i];
        } else {
            outputs.dupes += str[i];
        }
    }
    return outputs;
}

console.log(delDupes("aaaaabbbbbccccdefggggg"));