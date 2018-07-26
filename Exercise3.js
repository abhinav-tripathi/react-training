//Merge the words
const mergedWords = string => nextString => 
    nextString === undefined ? string : mergedWords(`${string} ${nextString}`); 

console.log(mergedWords('there')('is')());