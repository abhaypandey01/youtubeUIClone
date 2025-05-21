import { useState } from "react";
import { FaBars, FaFire, FaHistory, FaHome, FaPlay } from "react-icons/fa";


function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);

    const items = [
        { icon: <FaHome />, label: 'Home' },
        { icon: <FaFire />, label: 'Trending' },
        { icon: <FaPlay />, label: 'Subscriptions' },
        { icon: <FaHistory />, label: 'History' },
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
                        <a className="flex items-center gap-3">
                            {item.icon}
                            {!collapsed && <span>{item.label}</span>}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;