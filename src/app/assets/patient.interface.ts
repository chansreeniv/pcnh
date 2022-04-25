import { DiagnosisData } from "./diagnosis.interface"

export interface PatientData {
    diagnosis?: DiagnosisData[],
    UHID?: number,
    name: string,
    mobile?: number,
    age: number,
    sex: string,
    _id?: string,
    createdAt?: string,
    updatedAt?: string,
    __v?: number
}