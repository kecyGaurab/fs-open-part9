export const bmiCalculator = (mass:number,height:number) => {
    const bmi = mass/Math.pow(height,2)
    let text
    switch (true) {
        case (bmi < 18.5):
            text = 'severly underweight'
            break;
        case (bmi < 25):
            text = "normal"
            break;
        case (bmi < 30):
            text = "overweight"
            break;
        case (bmi >= 35):
            text = "obese"
            break;
        default:
            text="please enter proper value"
            break;
    }
    return text
}

console.log(bmiCalculator(81,1.92))