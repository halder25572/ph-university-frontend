import { Button, Table, type TableColumnsType, type TableProps } from "antd";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";
import type { TAcademicSemester } from "../../../types/academicManagement.type";
import { useState } from "react";
import type { TQueryParam } from "../../../types";


export type TTableData = Pick<TAcademicSemester, "name" | "year" | "startMonth" | "endMonth">

const AcademicSemester = () => {
    const [params, setParams] = useState<TQueryParam[] | undefined>();

    const { data: semesterData, isLoading, isFetching } = useGetAllSemestersQuery(params);


    const tableData = semesterData?.data?.map(({ _id, name, startMonth, endMonth, year }) => ({
        key: _id,
        name,
        startMonth,
        endMonth,
        year
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
            dataIndex: 'name',
            filters: [
                {
                    text: 'Autumn',
                    value: 'Autumn',
                },
                {
                    text: 'Summer',
                    value: 'Summer',
                },
                {
                    text: 'Fall',
                    value: 'Fall',
                },
            ],
        },
        {
            title: 'Year',
            key: 'year',
            dataIndex: 'year',
            filters: [
                {
                    text: '2025',
                    value: '2025',
                },
                {
                    text: '2026',
                    value: '2026',
                },
                {
                    text: '2027',
                    value: '2027',
                },
                {
                    text: '2028',
                    value: '2028',
                },
                {
                    text: '2029',
                    value: '2029',
                },
            ],
        },
        {
            title: 'Start Month',
            key: 'startMonth',
            dataIndex: 'startMonth',
        },
        {
            title: 'End Month',
            key: 'endMonth',
            dataIndex: 'endMonth',
        },
        {
            title: 'Action',
            key: 'x',
            render: () => {
                return (
                    <div><Button>Update</Button></div>
                )
            }
        },
    ];


    const onChange: TableProps<TTableData>['onChange'] = (_pagination, filters, _sorter, extra) => {
        if (extra.action === 'filter') {
            const queryParams: TQueryParam[] = [];

            filters.name?.forEach((item) => (
                queryParams.push({ name: 'name', value: item })
            )
            );
            filters.year?.forEach((item) => (
                queryParams.push({ name: 'year', value: item })
            )
            );
            setParams(queryParams);
        }
    };

    if (isLoading) {
        return <p>Loading..</p>
    }

    return <Table<TTableData>
        columns={columns}
        loading={isFetching}
        dataSource={tableData}
        onChange={onChange}
        showSorterTooltip={{ target: 'sorter-icon' }}
    />
};

export default AcademicSemester;