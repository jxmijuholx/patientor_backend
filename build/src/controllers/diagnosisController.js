import express from 'express';
import diagnosisService from '../services/diagnosisService';
const diagnosisRouter = express.Router();
diagnosisRouter.get('/', (req, res) => {
    const response = diagnosisService.getDiagnoses();
    if (!response) {
        res.status(404).send('Diagnoses not found');
    }
    res.status(200).send(response);
});
export default diagnosisRouter;
