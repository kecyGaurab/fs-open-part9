
interface resultObject {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    average: number
}


// const parseArguments = (args: Array<string>):number[] => {
//     if (args.length < 3) throw new Error('Not enough arguments')
//     const validArguments = args.map(arg => Number(arg))
//     const isvalidArguments = args.filter(ar => isNaN(Number(ar)))
//    if (isvalidArguments.length <= 2){
//        return validArguments
//    }
//    else {
//        throw new Error('Provided value were not numbers')
//    }
    

// }

 export const calculateExercise = (arr: number[],target:number): resultObject => {
    const trainingDays = arr.filter(a => a !== 0)
    const average = arr.reduce((total, amount, index, arr) => {
        total += amount;
        if (index === arr.length - 1) {
            return total / (arr.length);
        } else {
            return total;
        }
    }
    );
    const percentRating = (average / target )*100;

    let rating = 0;
  
    const ratingDescription = () => {
        if (percentRating < 60) {
            rating = 1;
            return 'Not good enough need to work harder'
        }
        else if (percentRating >=60 && percentRating <= 80) {
            rating = 2;
            return 'Ok, but you can still do better'
        }
        else 
        rating = 3
        return 'Perfect, keep it going'
    }
    
    const result = {
        periodLength: arr.length,
        trainingDays: trainingDays.length,
        success: true ? target < average : false,
        ratingDescription: ratingDescription(),
        rating: rating,
        target: target,
        average: average
    }
    console.log(result)
    return result
}

// try {
//     const  validArguments  = parseArguments(process.argv)
//     validArguments.shift()
//     calculateExercise(validArguments)
    
// } catch (error) {
//     console.log('error',error.message)
// }

