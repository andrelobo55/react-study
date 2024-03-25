import emojipedia from "./emojipedia";

const truncArray = emojipedia.map(function(emojiEntry) {
    return emojiEntry.meaning.substring(0, 100);
})
console.log(truncArray);

// let mean = emojiEntry.meaning, truncMean;
//     truncMean = mean.substring(0, 100);
    
//     return truncMean;

// let truncArray = [];
// let truncMeaning = verObj[0].substring(0,100), truncMeaning2 = verObj[1].substring(0,100), truncMeaning3 = verObj[2].substring(0,100)

// truncArray.push(truncMeaning)
// truncArray.push(truncMeaning2)
// truncArray.push(truncMeaning3)
// console.log(truncArray);


// const truncMeaning = emojipedia.reduce(function(accumulate, currentValue) {
//     return accumulate
// })

// const truncMeaning = emojipedia.reduce(function(i) {
//     let mean = [];
//     for(i; i < 3; i++){
//         emojipedia[i].meaning = push(mean)
//     }
//     return mean;
// })