
interface resultObject {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    average: number
}


const parseArguments = (args: Array<string>):number[] => {
    if (args.length < 3) throw new Error('Not enough arguments')
    const validArguments = args.map(arg => Number(arg))
    const isvalidArguments = args.filter(ar => isNaN(Number(ar)))
   if (isvalidArguments.length <= 2){
       return validArguments
   }
   else {
       throw new Error('Provided value were not numbers')
   }
    

}

const calculateExercise = (arr: number[]): resultObject => {
    arr.shift()
    const target = arr[0]
    const exerciseArray = arr.filter( (a,index) => index !== 0)
    const trainingDays = exerciseArray.filter(a => a !== 0)
    const average = exerciseArray.reduce((total, amount, index, exerciseArray) => {
        total += amount;
        if (index === exerciseArray.length - 1) {
            return total / (exerciseArray.length);
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
        periodLength: exerciseArray.length,
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

try {
    const  validArguments  = parseArguments(process.argv)
    validArguments.shift()
    calculateExercise(validArguments)
    
} catch (error) {
    console.log('error',error.message)
}

