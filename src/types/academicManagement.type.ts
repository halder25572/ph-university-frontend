/* eslint-disable @typescript-eslint/no-explicit-any */
export type TAcademicSemester = {
    _id: string;
    name: string;
    year: string;
    code: string;
    startMonth: string;
    endMonth: string;
    createAt: string;
    updateAt: string;
    __v: number;
};

export type TAcademicFaculty = {
    year: any;
    _id: string;
    name: string;
}