//Slice a string into a list
//If from the start to the middle, the string is the same from the end to the middle
//If rawstring is even delete
const palindromes = function (string) {
    let rawString = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    rawString = rawString.replace(/ /g, "");
    rawString = rawString.toLowerCase();
    let stringLength = rawString.length;
    beginString = rawString.substring(0, (stringLength / 2));
    if(stringLength % 2 == 0)
    {
        beginString = beginString.replace(/.$/,"");
    }
    endString = rawString.substring(stringLength, (stringLength / 2) + 1)
                        .split("")
                        .reverse()
                        .join("");
    return beginString === endString;
};

palindromes("Animal loots foliated detail of stool lamina.");
// Do not edit below this line
module.exports = palindromes;
