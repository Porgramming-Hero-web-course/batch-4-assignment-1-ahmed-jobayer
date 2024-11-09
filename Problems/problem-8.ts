{
    // 
    // key validation of object

    const validateKeys = <T extends object> (obj: T, keys: (keyof T)[]) : boolean =>{

        const result = keys.every((key) => key in obj);

        return result
    }

    const person = {
        name: 'jobayer',
        age: 21,
        email: "jobayer@gmail.com"
    }

    console.log(validateKeys(person, ["name", "age"]))










    // 
}