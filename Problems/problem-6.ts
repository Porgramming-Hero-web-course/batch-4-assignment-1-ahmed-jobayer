{
    // 

    // update a partial property of an object

    interface profile {
        name: string;
        age: number;
        email: string;
    }

    const updateProfile = <X extends profile, Y>(obj: X, property: Partial<X>) :X => {
        const updatedProfile = {
            ...obj,
            ...property

        }
        return updatedProfile
    }

    const myProfile: profile = {
        name: 'Alice',
        age: 25,
        email: 'alice@gmail.com'
    }

    console.log(updateProfile(myProfile, { age: 277 }))







    // 
}