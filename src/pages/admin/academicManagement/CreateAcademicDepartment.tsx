/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Spin } from "antd";
import PhForm from "../../../components/form/PhForm";
import PHInput from "../../../components/form/PHInput";
import PHSelect from "../../../components/form/PHSelect";
import {
    useCreateAcademicDepartmentMutation,
    useGetAllAcademicFacultyQuery,
} from "../../../redux/features/admin/academicManagement.api";
import { toast } from "sonner";
import { useForm, type FieldValues } from "react-hook-form";


interface Faculty {
    _id: string;
    name: string;
}

const CreateDepartment = () => {
    const form = useForm();
    // Correct: Use QUERY to fetch faculties
    const {
        data: facultiesData,
        isLoading: facultiesLoading,
        isError: facultiesError,
    } = useGetAllAcademicFacultyQuery(undefined);

    // Correct: Use MUTATION to create department
    const [createAcademicDepartment, { isLoading: creating }] = useCreateAcademicDepartmentMutation();

    const facultyOptions = facultiesData?.data?.map((faculty: Faculty) => ({
        value: faculty._id,
        label: faculty.name,
    })) || [];

    // Fix: Proper typing for form data
    const onSubmit = async (data: FieldValues) => {
        try {
            await createAcademicDepartment(data).unwrap();
            toast.success("Academic Department created successfully!");
            form.reset();
        } catch (error: any) {
            toast.error(error?.data?.message || "Failed to create academic department");
        }
    };

    // Loading & Error States
    if (facultiesLoading) {
        return (
            <Spin
                tip="Loading faculties..."
                style={{ display: "block", marginTop: "100px" }}
            />
        );
    }

    if (facultiesError) {
        return (
            <div style={{ textAlign: "center", marginTop: "50px", color: "red" }}>
                Error loading faculties. Please try again later.
            </div>
        );
    }

    return (
        <div style={{ maxWidth: 600, margin: "40px auto" }}>
            <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
                Create Academic Department
            </h2>

            <PhForm onSubmit={onSubmit}>
                <PHInput
                    type="text"
                    name="name"
                    label="Department Name"
                />

                {/* PHSelect with options */}
                <PHSelect
                    name="academicFaculty"
                    label="Academic Faculty"
                    options={facultyOptions}
                />

                {/* Submit Button */}
                <Button
                    type="primary"
                    htmlType="submit"
                    loading={creating}
                    block
                    size="large"
                    style={{ height: "45px", fontWeight: "bold", marginTop: "20px" }}
                >
                    Create Department
                </Button>
            </PhForm>
        </div>
    );
};

export default CreateDepartment;