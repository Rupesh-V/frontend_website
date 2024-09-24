import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();

    const mainMenuArray = [
        { id: 1, name: 'Dashboard', route: '/dashboard', page_icon: 'icon-dashboard' },
        { id: 2, name: 'Settings', route: '/settings', page_icon: 'icon-settings' },
        { id: 3, name: 'Reports', route: '#', page_icon: 'icon-reports' },
        { id: 4, name: 'User Management', route: '/users', page_icon: 'icon-users' },
    ];

    const subMenuArray = [
        { id: 1, name: 'Profile', route: '/users/profile', parent_page_id: 4 },
        { id: 2, name: 'Permissions', route: '/users/permissions', parent_page_id: 4 },
    ];

    return (
        <div>
            <aside id="leftsidebar" className="sidebar">
                <div className="menu">
                    <ul className="list">
                        {mainMenuArray.map(mainMenu => {
                            const { name: mainMenuName, route: mainMenuRoute, id: mainMenuId, page_icon: icon } = mainMenu;
                            const isActive = location.pathname === mainMenuRoute;

                            return (
                                <li className={isActive ? "active" : ""} key={mainMenuId}>
                                    {mainMenuRoute !== '#' ? (
                                        mainMenuId !== 4 && (
                                            <Link to={mainMenuRoute}>
                                                <i className={icon}></i>
                                                <span>{mainMenuName}</span>
                                            </Link>
                                        )
                                    ) : (
                                        <SubMenu mainMenu={mainMenu} subMenuArray={subMenuArray} />
                                    )}
                                </li>
                            );
                        })}
                        <li>
                            <Link to="/logout">
                                <i data-feather="power"></i>
                                <span>Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    );
};

<AboutUs />
const SubMenu = ({ mainMenu, subMenuArray }) => {
    const location = useLocation();
    const parentId = mainMenu.id;

    const filteredSubMenus = subMenuArray.filter(subMenu => subMenu.parent_page_id === parentId);
    const hasActiveSubMenu = filteredSubMenus.some(subMenu => location.pathname === subMenu.route);

    return (
        <>
            <a href="#" onClick={e => e.preventDefault()} className="menu-toggle">
                <i className={mainMenu.page_icon}></i>
                <span>{mainMenu.name}</span>
            </a>
            <ul className="ml-menu">
                {filteredSubMenus.map(subMenu => {
                    const { name: subMenuName, route: subMenuRoute } = subMenu;
                    const isActive = location.pathname === subMenuRoute;

                    return (
                        <li className={isActive ? "active" : ""} key={subMenu.id}>
                            <Link to={subMenuRoute} className={isActive ? 'sbmn-selected' : ''}>
                                {subMenuName}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default Sidebar;
