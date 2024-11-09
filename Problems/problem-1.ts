{
    // 
    // sum of an array of numbers

    const sumArray = (arrOfNumbers: number[]): number => {
        let total: number = 0

        for (let nmbr of arrOfNumbers) {
            total = total + nmbr
        }

        return total;
    }

    const numbers: number[] = [1, 2, 3, 4, 5, 6, 6]

    const result: number = sumArray(numbers)
    console.log(result)


    // 
}