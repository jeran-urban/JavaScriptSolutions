//solution
function funWithAnagrams(text){
    var arrayOfStringsSetToLowerCaseToReturn = [];
    var arrayOfAlpahbatizedStringsAlreadyFound = [];

    text.forEach((word)=> {
        if (word){
            let sortedWord = alphabatize(word);
            if (!arrayOfAlpahbatizedStringsAlreadyFound.includes(sortedWord)){
                arrayOfAlpahbatizedStringsAlreadyFound.push(sortedWord);
                arrayOfStringsSetToLowerCaseToReturn.push(word.toLowerCase());
            }
        }
    });
    return arrayOfStringsSetToLowerCaseToReturn.sort();

}

function alphabatize(word){
    if (!word) {
        return;
    }

    word = word.toLowerCase();
    word = word.split('');
    word = word.sort();
    word = word.join('');
    
    return word;
}


//used for quick visual test of console output
var test1 = ["dell", "ledl", "elld", "dlle"];
var test2 = ["dell", "dell", "abc", "abc"];
var test3 = ["dell", "", "abc", "abc"];
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