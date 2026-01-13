import { Button, Pagination, Space, Table, type TableColumnsType, type TableProps } from "antd";
import { useState } from "react";
import type { TQueryParam, TStudent } from "../../types";
import { useGetAllStudentsQuery } from "../../redux/features/admin/userManagement.api";



export type TTableData = Pick<TStudent, "fullName" | "id">

const StudentData = () => {
    const [params, setParams] = useState<TQueryParam[]>([]);
    const [page, setPage] = useState(3);

    const { data: studentData, isLoading, isFetching } = useGetAllStudentsQuery([
        { name: 'limit', value: 3 },
        { name: 'page', value: page },
        { name: 'sort', value: 'id' }, ...params
    ]);

    const metaData = studentData?.meta;

    const tableData = studentData?.data?.map(({ _id, fullName, id }) => ({
        key: _id,
        fullName,
        id
    }));

    const columns: TableColumnsType<TTableData> = [
        {
            title: 'SL',
            key: 'sl',
            render: (_text, _record, index) => index + 1,
        },
        {
            title: 'Name',
            key: 'name',
            dataIndex: 'fullName',
        },
        {
            title: 'Roll No',
            key: 'id',
            dataIndex: 'id',
        },
        {
            title: 'Action',
            key: 'x',
            render: () => {
                return (
                    <Space>
                        <Button style={{ backgroundColor: 'YellowGreen', color: 'white' }}>Details</Button>
                        <Button style={{ backgroundColor: 'MediumSlateBlue', color: 'white' }}>Update</Button>
                        <Button style={{ backgroundColor: 'OrangeRed', color: 'white' }}>Block</Button>
                    </Space>
                )
            },
            width: '1%'
        },
    ];


    const onChange: TableProps<TTableData>['onChange'] = (_pagination, filters, _sorter, extra) => {
        if (extra.action === 'filter') {
            const queryParams: TQueryParam[] = [];

            filters.name?.forEach((item) => (
                queryParams.push({ name: 'fullName', value: item })
            ),
            );
            filters.year?.forEach((item) => (
                queryParams.push({ name: 'year', value: item })
            ),
            );
            setParams(queryParams);
        }
    };

    if (isLoading) {
        return <p>Loading..</p>
    }

    return <>
        <Table<TTableData>
            columns={columns}
            loading={isFetching}
            dataSource={tableData}
            onChange={onChange}
            pagination={false}
            showSorterTooltip={{ target: 'sorter-icon' }}
        />
        <Pagination current={page} onChange={(value) => setPage(value)} pageSize={metaData?.limit} total={metaData?.total}/>
    </>
};

export default StudentData;