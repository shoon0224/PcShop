import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    return (
        <div className="sidebar">
            <div className="middlesidebar">
                <Link to="ItemList" className="staticdata">ALL</Link>
            </div>
            <div className="middlesidebar">
                <Link to="/ItemList" className="staticdata">데스크탑</Link>
            </div>
            <div className="middlesidebar">
                <Link to="/ItemList" className="staticdata">노트북</Link>
            </div>
            <div className="middlesidebar">
                <Link to="/ItemList" className="staticdata">태블릿</Link>
            </div>
        </div>
    )
}

export default Sidebar;