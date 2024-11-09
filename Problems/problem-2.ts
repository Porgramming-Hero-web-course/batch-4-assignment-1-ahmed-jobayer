{
    // 

    // Remove Duplicates

    const removeDuplicates = (arrOfNumbers: number[]) : number[] => {

        const withoutDuplicates: number[] = []

        arrOfNumbers.forEach((numOfDupArr) => {
        if (!withoutDuplicates.includes(numOfDupArr) ) {
        withoutDuplicates.push(numOfDupArr)
      }})
      return withoutDuplicates
        
    }

    const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5])
    console.log(result)


    

    // 
}