import express, { Request, Response } from 'express';
import diagnosisService from '../services/diagnosisService';


const diagnosisRouter = express.Router();

diagnosisRouter.get('/', (req: Request, res: Response) =>  {
    const response = diagnosisService.getDiagnoses();
    if (!response){
        res.status(404).send('Diagnoses not found');
    }
    res.status(200).send(response);
});

export default diagnosisRouter ;