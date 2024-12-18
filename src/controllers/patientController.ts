import express, { Request, Response } from 'express';
import patientService from '../services/patientService';

const patientRouter = express.Router();

patientRouter.get('/', (_req: Request, res: Response) => {
    const response = patientService.getPatients();
    if (!response){
        res.status(404).send('Patients not found');
    }
    res.status(200).send(response);
});

export default patientRouter;