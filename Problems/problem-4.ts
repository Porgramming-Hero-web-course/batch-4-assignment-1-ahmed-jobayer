{
    // calculate area based on the shape type

    type Circle = {
        shape: "circle";
        radius: number
    }

    type Rectangle = {
        shape: "rectangle";
        width: number;
        hight: number
    }

    type Shape = Circle | Rectangle

    const calculateShapeArea = (cirOrRec: Shape): number => {

        if (cirOrRec.shape === 'circle') {
            return parseFloat((Math.PI * cirOrRec.radius ** 2).toFixed(2))
        } else {
            return cirOrRec.hight * cirOrRec.width
        }
    }

    // const circleArea = calculateShapeArea({shape: 'circle', radius: 5})
    const circleArea = calculateShapeArea({ shape: "rectangle", width: 4, hight: 6 })

    console.log(circleArea)


}