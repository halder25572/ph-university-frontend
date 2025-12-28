/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, Tag } from "antd";
import dayjs from "dayjs";
import { useGetAllAcademicDepartmentQuery } from "../../../redux/features/admin/academicManagement.api";

const AcademicDepartments = () => {
    // RTK Query
    const {
        data: departmentsData,
        isLoading,
        isError,
    } = useGetAllAcademicDepartmentQuery(undefined);

    // Table Columns
    const columns = [
        {
            title: '#',
            key: 'serial',
            width: 60,
            align: "center" as "center",
            render: (_: any, _record: any, index: number) => (
                <strong style={{ color: "#585656ff" }}>
                    {index + 1}
                </strong>
            ),
        },
        {
            title: "Department Name",
            dataIndex: "name",
            key: "name",
            sorter: (a: any, b: any) => a.name.localeCompare(b.name),
        },
        {
            title: "Academic Faculty",
            dataIndex: ["academicFaculty", "name"],
            key: "faculty",
            render: (facultyName: string | null) => {
                if (!facultyName) {
                    return <Tag color="red">No Faculty Assigned</Tag>;
                }
                return <Tag color="blue">{facultyName}</Tag>;
            },
        },
        {
            title: "Created At",
            dataIndex: "createdAt",
            key: "createdAt",
            render: (date: string) => dayjs(date).format("DD MMM YYYY, hh:mm A"),
            sorter: (a: any, b: any) =>
                new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
        },
    ];

    // Loading state
    if (isLoading) {
        return (
            <div style={{ textAlign: "center", padding: "100px 0" }}>
                <Table loading={true} />
            </div>
        );
    }

    // Error state
    if (isError) {
        return (
            <div style={{ textAlign: "center", padding: "50px", color: "#ff4d4f" }}>
                Failed to load academic departments. Please try again.
            </div>
        );
    }

    // Data source for table
    const tableData = departmentsData?.data || [];

    return (
        <div style={{ padding: "20px" }}>
            <h1 style={{ fontSize: "28px", marginBottom: "30px", textAlign: "center" }}>
                Academic Departments List
            </h1>

            <Table
                columns={columns}
                dataSource={tableData}
                rowKey="_id"
                pagination={{
                    pageSize: departmentsData?.meta?.limit || 10,
                    total: departmentsData?.meta?.total || 0,
                    current: departmentsData?.meta?.page || 1,
                }}
                bordered
                scroll={{ x: 800 }} // mobile এ responsive
            />
        </div>
    );
};

export default AcademicDepartments;