import { List } from "antd";
import { useGetAllAcademicFacultyQuery } from "../../../redux/features/admin/academicManagement.api";
import type { TAcademicFaculty } from "../../../types/academicManagement.type";


export type TTableData = Pick<TAcademicFaculty, "name">

const AcademicFaculty = () => {
    const { data: facultyData, isLoading, isFetching } = useGetAllAcademicFacultyQuery(undefined);
   

    const academicFacultyData = facultyData?.data?.map(({ _id, name }) => ({
        key: _id,
        name,
    }));


    if (isLoading) {
        return <p>Loading..</p>
    }
    return (
        <List
            header={
                <div style={{ display: "flex", fontWeight: 600 }}>
                    <div style={{ width: 60 }}>SL</div>
                    <div>Name</div>
                </div>
            }
            itemLayout="horizontal"
            loading={isFetching}
            dataSource={academicFacultyData}
            renderItem={(item, index) => (
                <List.Item>
                    <div style={{ display: "flex", width: "100%" }}>
                        <div style={{ width: 60 }}>{index + 1}</div>
                        <div>{item.name}</div>
                    </div>
                </List.Item>
            )}
        />
    );
};

export default AcademicFaculty;