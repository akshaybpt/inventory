import { Sidebar, Menu, MenuItem, useProSidebar, SubMenu } from 'react-pro-sidebar';
import { FaUserEdit } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi";
import { MdDashboard, MdLogout } from "react-icons/md";
import { IoAddCircle } from "react-icons/io5";
import { CgProfile, CgPassword } from "react-icons/cg";
import { Link } from 'react-router-dom';
import userContext from '../context/user/userContex';
import React,{useContext} from 'react';
const Sidebarr = () => {
    const context=useContext(userContext);
    const {user}=context
    const { collapseSidebar } = useProSidebar();

    return (
        <div >
            <Sidebar >
                <Menu iconShape="square">
                    <MenuItem icon={<GiHamburgerMenu />} onClick={() => collapseSidebar()}>{user.name}</MenuItem>
                    <hr />
                    <MenuItem routerLink={<Link to="/" />} icon={<MdDashboard />} > Dashboard </MenuItem>
                    <MenuItem routerLink={<Link to="/addproduct" />} icon={<IoAddCircle />}>Add Product</MenuItem>
                    <SubMenu icon={<CgProfile />} prefix={<>Profile</>}>
                        <MenuItem routerLink={<Link to="/profile" />} icon={<CgProfile />}> View Profile </MenuItem>
                        <MenuItem routerLink={<Link to="/editprofile" />} icon={<FaUserEdit />}> Edit Profile </MenuItem>
                        <MenuItem routerLink={<Link to="/editpassword" />} icon={<CgPassword />} >Change Password</MenuItem>
                    </SubMenu>
                    <MenuItem icon={<MdLogout />} >Logout</MenuItem>
                </Menu>
            </Sidebar>
        </div>
    );
}
export default Sidebarr;