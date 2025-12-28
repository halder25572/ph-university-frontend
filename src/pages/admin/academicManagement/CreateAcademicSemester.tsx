/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FieldValues, SubmitHandler } from "react-hook-form";
import PhForm from "../../../components/form/PhForm";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { semesterOptions } from "../../../components/constants/semester";
import { monthOptions } from "../../../components/constants/global";
import { zodResolver } from '@hookform/resolvers/zod';
import { academicSemesterSchema } from "../../../Schemas/academicManagement.schema";
import { useAddAcademicSemesterMutation } from "../../../redux/features/admin/academicManagement.api";
import { toast } from "sonner";
import type { TResponse } from "../../../types/global";
import type { TAcademicSemester } from "../../../types/academicManagement.type";




// get current year
const currentYear = new Date().getFullYear();

// year map
const yearOption = [0, 1, 2, 3, 4].map(number => ({
    value: String(currentYear + number),
    label: String(currentYear + number),
}));

const CreateAcademicSemester : any = () => {

    const [addAcademicSemester] = useAddAcademicSemesterMutation();


    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        // console.log(data.name);
        const toastId = toast.loading('Creating...');
        const name = semesterOptions[Number(data.name) - 1]?.label;
        const semesterData = {
            name, 
            code: data.name,
            year: data.year,
            startMonth: data.startMonth,
            endMonth: data.startMonth,
        };
        try {
            const res = await addAcademicSemester(semesterData) as TResponse<TAcademicSemester>;
            if(res.error){
                toast.error(res.error.data.message, {id: toastId});
            }else{
                toast.success("Semester Created", {id: toastId});
            }
        } catch (err) {
            console.log(err);
            toast.error('Something went wrong', {id: toastId});
        }
    };


    return (
        <Flex justify="center" align="center">
            <Col span={6} >
                <PhForm onSubmit={onSubmit} resolver={zodResolver(academicSemesterSchema)}>
                    <PHSelect label="Name" name="name" options={semesterOptions} />
                    <PHSelect label="Year" name="year" options={yearOption} />
                    <PHSelect label="Start Month" name="startMonth" options={monthOptions} />
                    <PHSelect label="End Month" name="endMonth" options={monthOptions} />
                    <Button htmlType="submit">Submit</Button>
                </PhForm>
            </Col>
        </Flex>
    );
};

export default CreateAcademicSemester;