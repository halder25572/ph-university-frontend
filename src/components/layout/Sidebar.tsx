/* eslint-disable @typescript-eslint/no-explicit-any */
import { Layout, Menu,  } from 'antd';
import { Link } from 'react-router-dom';
import { sidebarItemsGenerator } from '../../utils/sidebarItemsGenerator';
import { adminPaths } from '../../routes/admin.routes';
import { facultyPaths } from '../../routes/faculty.route';
import { studentPaths } from '../../routes/student.route';
import { useAppSelector } from '../../redux/hooks';
import { useCurrentUser } from '../../redux/features/auth/authSlice';


const { Sider } = Layout;

const userRole = {
    ADMIN: 'superAdmin',
    FACULTY: 'faculty',
    STUDENT: 'student',
}

const Sidebar = () => {

    const user = useAppSelector(useCurrentUser);
    // console.log("Current User", user);

    let sidebarItems;

    switch (user?.role) {
        case userRole.ADMIN:
           sidebarItems = sidebarItemsGenerator(adminPaths as any, userRole.ADMIN)
            break;
        case userRole.FACULTY:
           sidebarItems = sidebarItemsGenerator(facultyPaths as any, userRole.FACULTY)
            break;
        case userRole.STUDENT:
           sidebarItems = sidebarItemsGenerator(studentPaths as any, userRole.STUDENT)
            break;
    
        default:
            break;
    }


    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <div style={{ color: "white", height: '4rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Link to='/admin/dashboard'><h1 style={{ color: 'white' }}>PH University</h1></Link>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItems} />
        </Sider>
    );
};

export default Sidebar;