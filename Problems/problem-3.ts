{
    // 
    // count how many time the targeted word repeated in the sentence

    const countWordOccurrences =(sentence:string, word: string) : number => {

        const sentenceInLowerCase = sentence.toLowerCase()
        const wordInLowerCase = word.toLowerCase()

        const words = sentenceInLowerCase.split(" ")
        const expectedWordArr = words.filter(word => word ===wordInLowerCase)
        return expectedWordArr.length
}



const slicedWord = countWordOccurrences("I love typescript typescript typescript", "typescript");
console.log(slicedWord)


// 
}