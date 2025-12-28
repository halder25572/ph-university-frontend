import { Button, Col, Flex } from "antd";
import PhForm from "../../../components/form/PhForm";
import PHSelect from "../../../components/form/PHSelect";
import { zodResolver } from "@hookform/resolvers/zod";
import type { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import type { TResponse } from "../../../types";
import type { TAcademicSemester } from "../../../types/academicManagement.type";
import { useCreateAcademicFacultyMutation } from "../../../redux/features/admin/academicManagement.api";
import { academicFacultySchema } from "../../../Schemas/academicManagement.schema";
import PHInput from "../../../components/form/PHInput";





const CreateAcademicFaculty = () => {
    const [addAcademicFaculty] = useCreateAcademicFacultyMutation();

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        console.log('Academic Data' ,data.name);
        const toastId = toast.loading('Creating...');
        const name = data.name;
        const semesterData = {
            name,
        };
        try {
            const res = await addAcademicFaculty(semesterData) as TResponse<TAcademicSemester>;
            if (res.error) {
                toast.error(res.error.data.message, { id: toastId });
            } else {
                toast.success("Faculty Created", { id: toastId });
            }
        } catch (err) {
            console.log(err);
            toast.error('Something went wrong', { id: toastId });
        }
    };

    return (
        <Flex justify="center" align="center">
            <Col span={6} >
                <PhForm onSubmit={onSubmit} resolver={zodResolver(academicFacultySchema)}>
                    <PHInput label="Name" name="name" options={name} />
                    <Button htmlType="submit">Submit</Button>
                </PhForm>
            </Col>
        </Flex>
    );
};

export default CreateAcademicFaculty;