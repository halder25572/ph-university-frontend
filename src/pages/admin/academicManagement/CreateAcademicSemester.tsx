import type { FieldValues, SubmitHandler } from "react-hook-form";
import PhForm from "../../../components/form/PhForm";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";


const nameOptions = [
    {
        value: '01',
        label: 'Autumn',
    },
    {
        value: '02',
        label: 'Summer',
    },
    {
        value: '03',
        label: 'Fall',
    },
];

// get current year
const currentYear = new Date().getFullYear();
console.log(currentYear); // current year

// year map
const yearOption = [0, 1, 2, 3, 4].map(number => ({
    value: String(currentYear + number),
    label: String(currentYear + number),
}));

console.log(yearOption);

const CreateAcademicSemester = () => {

    const onSubmit : SubmitHandler<FieldValues> = (data) => {
        console.log(data.name);

        const name = nameOptions[Number(data.name) - 1]?.label;

        const semesterData = {
            name,
            code: data.name,
            year: data.year,
        }
        console.log("this data is ", semesterData);
    }
    
    return (
        <Flex justify="center" align="center">
            <Col span={6} >
                <PhForm onSubmit={onSubmit}>
                    <PHSelect label="Name" name="name" options={nameOptions} />
                    <PHSelect label="Year" name="year" options={yearOption} />
                    <PHSelect label="Start Month" name="startMonth" options={nameOptions} />
                    <PHSelect label="End Month" name="endMonth" options={nameOptions} />
                    <Button htmlType="submit">Submit</Button>
                </PhForm>
            </Col>
        </Flex>
    );
};

export default CreateAcademicSemester;