import { useState } from "react";
import { FaBars, FaFire, FaHistory, FaHome, FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);

    const items = [
        { icon: <FaHome />, label: 'Home', slug: '/' },
        { icon: <FaFire />, label: 'Trending', slug: '/trending' },
        { icon: <FaPlay />, label: 'Channel', slug: '/channel' },
        { icon: <FaHistory />, label: 'History', slug: '/history' },
    ];

    return (
        <div className={`bg-base-100 h-full p-2 shadow-md transition-all duration-200 ${collapsed ? 'w-16' : 'w-56'}`}>
            <button 
            className="btn btn-ghost btn-sm mb-4"
            onClick={() => setCollapsed(!collapsed)}>
                <FaBars />
            </button>
            <ul className="menu p-0 space-y-2">
                {items.map((item, index) => (
                    <li key={index}>
                        <Link to={`${item.slug}`} className="flex items-center gap-3">
                            {item.icon}
                            {!collapsed && <span>{item.label}</span>}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;