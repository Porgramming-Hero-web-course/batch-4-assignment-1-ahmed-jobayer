{
    // 
    // finding a propery value of an object using generic function

    const getProperty = <X, Y extends keyof X> (obj: X, propertyName: Y) => {

        return obj[propertyName]
    }



    const person = {
        name : "jobayer",
        age : 21,
        address: "ghrthtrh"
    }

    const result = getProperty(person, 'address')
    console.log(result)




    // 
}