import { z } from 'zod';

export const academicSemesterSchema = z.object({
    // name: z.string({ required_error: 'This field is required' }),
    name: z.string().optional().refine(val => val, {
        message: 'Please select a semester name',
    }),
    year: z.string().optional().refine(val => val, {
        message: 'Please select a year',
    }),
    startMonth: z.string().optional().refine(val => val, {
        message: 'Please select a start month',
    }),
    endMonth: z.string().optional().refine(val => val, {
        message: 'Please select a end month',
    }),
});

export const academicFacultySchema = z.object({
    name: z.string().optional().refine(val => val, {
        message: 'Please select Faculty name',
    }),
});