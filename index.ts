import express from 'express';
import bodyParser from 'body-parser';
import {Request, Response} from 'express';

import { bmiCalculator } from './bmiCalculator'
import { calculateExercise } from './exerciseCalculator'

const app = express();

app.use(bodyParser.json());


app.get('/ping',(_req, res) => {
    res.send('pong')
})
app.get('/hello',(_req, res) => {
    res.send('hellowww')
})

app.get('/bmi',(req: Request, res: Response) => {
    if( (!req.query.mass) || 
        (!req.query.height) || 
        ( typeof req.query.mass !== 'number') || 
        ( typeof req.query.height !== 'number')
        ) {
            throw new Error('invalid query')
        }
    
    const { mass, height } = req.query
    const result = bmiCalculator( mass, height)
    res.json({mass, height, result})
})

app.post('/calculateExercise',(req: Request, res: Response) => {

    const { arr, target } = req.body; 
    if(!arr || !target || !Array.isArray(arr) || typeof target !== 'number'){ 
        throw new Error('invalid arguments')
    }
    res.json(calculateExercise(arr, target))
})

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})