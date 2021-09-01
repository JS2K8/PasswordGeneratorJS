let pass = ""

function capitalise(s)
{
    return s[0].toUpperCase() + s.slice(1);
}

function randomWord() {
    let i = Math.floor(Math.random() * adj.length)
    let j = Math.floor(Math.random() * adj.length)
    let k = Math.floor(Math.random() * nouns.length)
    
    let wordOne = capitalise(adj[i])
    let wordTwo = capitalise(adj[j])
    let wordThree = capitalise(nouns[k])
    
    pass += wordOne += wordTwo += wordThree
}

function randomSymbol() {
    let m = Math.floor(Math.random() * symbols.length)
    let sym = symbols[m]

    pass += sym
}

function randomNumber() {
    let n = Math.floor(Math.random() * 1000)

    pass += n
}

function genPass() {
    pass = ""

    randomWord()
    
    randomSymbol()
    
    randomNumber()
    
    document.getElementById("yourPass").innerHTML = pass
}

function copyDivToClipboard() {
    var range = document.createRange();
    range.selectNode(document.getElementById("yourPass"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
    alert("Password copied to clipboard")
}
