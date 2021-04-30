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

    var Out = [];
    var Html = document.getElementById("Copied html").value;
    var Regular = document.getElementById("Find pattern").value;

    var ToWrite = GetMatchesInHTML(Html, Regular);

    WriteResults(ToWrite);
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