function WriteResults(ToOutput) {
    //Find and clean element
    var OutElem = document.getElementById("Founded matches")
    OutElem.innerHTML = "";

    //Add all output values
    for (let i = 0; i < ToOutput.length; i++){
        var ToAdd = "<div>" + ToOutput[i] + "</div>";
        OutElem.innerHTML += ToAdd;
    }
}
function Write3() {
    var Array = ["Me one", "Me two"];
    WriteResults(Array);

    var Html = document.getElementById("Copied html").value;
    var Regular = document.getElementById("Find pattern").value;

    var ToWrite = GetMatchesWithMoreThenOne(Html, Regular.split(';'))

    WriteResults(ToWrite);
}

/**
 * Same with GetMatchesInHTML, but with more then 1 find word
 * @param Html html code as text
 * @param ToFindMassive Group of words to find
 * @returns {[string, string...]}
 */
function GetMatchesWithMoreThenOne(Html, ToFindMassive){
    var Out = [];
    for (let i = 0; i < ToFindMassive.length; i++){
        Array.prototype.push.apply(Out, GetMatchesInHTML(Html, ToFindMassive[i]))
    }
    return Out;
}
/**
 * Find matches text in html
 * @param Html html code as text
 * @param ToFind Element to find in text
 * @returns {[string, string...]}
 */
function GetMatchesInHTML(Html, ToFind) {
    var Out = [];
    var Regular = new RegExp(ToFind, 'g');

    let RegArray;
    while ((RegArray = Regular.exec(Html)) !== null) {
        Out.push(`Found ${RegArray[0]}. Next starts at ${Regular.lastIndex}.`);
    }
    return Out;
}