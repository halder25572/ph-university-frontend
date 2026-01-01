import type { FieldValues, SubmitHandler } from "react-hook-form";
import { Button, Col, Divider, Row } from "antd";
import PhForm from "../../components/form/PhForm";
import PHInput from "../../components/form/PHInput";
import PHSelect from "../../components/form/PHSelect";
import { bloodGroupOptions } from "../../components/constants/global";




const studentData = {
    "password": "student123",
    "student": {
        "name": {
            "firstName": "I am ",
            "middleName": "Student",
            "lastName": "Number 1"
        },
        "gender": "male",
        "dateOfBirth": "1990-01-01",
        "bloodGroup": "A+",
        "email": "student2@gmail.com",
        "contactNo": "1235678",
        "emergencyContactNo": "987-654-3210",
        "presentAddress": "123 Main St, CityVilla",
        "permanentAddress": "456 Oak St, Townsville",
        "guardian": {
            "fatherName": "James Doe",
            "fatherOccupation": "Engineer",
            "fatherContactNo": "111-222-3333",
            "motherName": "Mary Doe",
            "motherOccupation": "Teacher",
            "motherContactNo": "444-555-6666"
        },
        "localGuardian": {
            "name": "Alice Johnson",
            "occupation": "Doctor",
            "contactNo": "777-888-9999",
            "address": "789 Pine St, Village"
        },
        "admissionSemester": "65b0104110b74fcbd7a25d92",
        "academicDepartment": "65b00fb010b74fcbd7a25d8e"
    }
}

const CreateStudent = () => {
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data);
        // const formData = new FormData();

        // formData.append('Data', JSON.stringify(data));
    }
    return (
        <Row>
            <Col span={24}>
                <PhForm onSubmit={onSubmit}>
                    <Divider>Personal Info.</Divider>
                    <Row gutter={8}>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput type="text" name="name.firstName" label="First Name" />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput type="text" name="name.middleName" label="Middle Name" />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput type="text" name="name.lastName" label="Last Name" />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput type="text" name="name.gender" label="Gender" />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput type="text" name="name.date" label="Date of Birth" />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHSelect
                                options={bloodGroupOptions}
                                name="bloogGroup"
                                label="Blood group"
                            />
                        </Col>
                    </Row>
                    <Divider>Contact Info.</Divider>
                    <Row gutter={8}>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput type="text" name="name.email" label="Email" />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput type="text" name="name.contactNo" label="Contact No" />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput type="text" name="name.emergencyContactNo" label="Emergency Contact No" />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput type="text" name="name.presentAddress" label="Present Address" />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput type="text" name="name.permanentAddress" label="Permanent Address" />
                        </Col>
                    </Row>
                    <Divider>Guardian Info.</Divider>
                    <Row gutter={8}>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput type="text" name="name.fatherName" label="Father Name" />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput type="text" name="name.fatherOccupation" label="Father Occupation" />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput type="text" name="name.fatherContactNo" label="Father Contact No" />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput type="text" name="name.motherName" label="Mother Name" />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput type="text" name="name.motherOccupation" label="Mother Occupation" />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput type="text" name="name.motherContactNo" label="Mother Contact No" />
                        </Col>
                    </Row>
                    <Divider>Local Guardian Info.</Divider>
                    <Row gutter={8}>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput type="text" name="name.name" label="Name" />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput type="text" name="name.occupation" label="Occupation" />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput type="text" name="name.contactNo" label="Contact No" />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput type="text" name="name.address" label="Address" />
                        </Col>
                    </Row>
                    <Button htmlType="submit">Submit</Button>
                </PhForm>
            </Col>
        </Row>
    );
};

export default CreateStudent;