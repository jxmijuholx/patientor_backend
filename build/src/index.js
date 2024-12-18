import express from 'express';
import diagnosisRouter from './controllers/diagnosisController';
import patientsRouter from './controllers/patientController';
const app = express();
const PORT = 3000;
app.get('/', (_req, res) => {
    res.send('Hello Full Stack!');
});
app.get('/api', (_req, res) => {
    res.send('Hello from Patientor backend!');
});
app.get('/api/ping', (_req, res) => {
    console.log('someone pinged here');
    res.send('pong');
});
app.use('/api/diagnoses', diagnosisRouter);
app.use('/api/patients', patientsRouter);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
