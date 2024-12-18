import patients from '../../data/patients';
import { Patient, PublicPatient } from '../types';

const patientList: Patient[] = patients;

const getPatients = (): PublicPatient[] => {
    return patientList.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
};

export default {
    getPatients
};
