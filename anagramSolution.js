//solution
function funWithAnagrams(text){
    var ListOfLowerCaseStringsToReturn = [];
    var ListOfAlpahbatizedStringsAlreadyFound = [];

    text.forEach((word)=> {
        if (word){
            let sortedWord = alphabatize(word);
            if (!ListOfAlpahbatizedStringsAlreadyFound.includes(sortedWord)){
                ListOfAlpahbatizedStringsAlreadyFound.push(sortedWord);
                ListOfLowerCaseStringsToReturn.push(sanatizeString(word));
            }
        }
    });
    return ListOfLowerCaseStringsToReturn.sort();

}

function alphabatize(word){
    if (!word) {
        return;
    }

    word = sanatizeString(word);
    word = word.split('');
    word = word.sort();
    word = word.join('');
    
    return word;
}

function sanatizeString(word){
    return word.toLowerCase().replace(/[^a-z\d]/g, '');
}


//used for quick visual test of console output
var test1 = ["dell", "ledl", "elld", "dlle"];
var test2 = ["dell@", " dell", "d e l l ", "ab!c", "abc*", "a^b&c"];
var test3 = ["dell", "", " abc", "abc"];
var test4 = ["Dell", "", "aBc", "abc"];
var test5 = ["monk", "konm", "bbc", "cbb", "dell", "ledl"];
var test6 = ["dell", "dell", "leld", "abc", "acb", "the", "teh", "het"];
var test7 = ["dell", "DELL", "leld", "abc", "acb", "ABC", "the", "teh", "het", "EHT", "anagram", "magrana", "margana", "GrAmAnA"];
var test8 = [];

console.log("**TEST KEY:**");
console.log("[ 'expected' ]");
console.log(["actual"]);

console.log("\ntest 1: \n[ 'dell' ]");
console.log(funWithAnagrams(test1));
console.log("test 2: \n[ 'abc', 'dell' ]");
console.log(funWithAnagrams(test2));
console.log("test 3: \n[ 'abc', 'dell' ]");
console.log(funWithAnagrams(test3));
console.log("test 4: \n[ 'abc', 'dell' ]");
console.log(funWithAnagrams(test4));
console.log("test 5: \n[ 'bbc', 'dell', 'monk' ]");
console.log(funWithAnagrams(test5));
console.log("test 6: \n[ 'abc', 'dell', 'the' ]");
console.log(funWithAnagrams(test6));
console.log("test 7: \n[ 'abc', 'anagram', 'dell', 'the' ]");
console.log(funWithAnagrams(test7));
console.log("test 8: \n[]");
console.log(funWithAnagrams(test8));