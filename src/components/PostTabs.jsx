import { useState } from "react";
import { MdEdit } from "react-icons/md";


function PostTabs() {

    const [activeTab, setActiveTab] = useState("Published");
    const tabs = ["Published", "Scheduled", "Archived"];

    return (
        <div className="mt-6 w-full">
            {/* scrollable tab section */}
            <div className="flex border-b border-gray-700 overflow-x-auto no-scrollbar">
                {tabs.map((tab) => (
                    <button
                    onClick={() => setActiveTab(tab)}
                    key={tab}
                    className={`flex-shrink-0 px-3 font-semibold whitespace-nowrap py-4 sm:px-6 sm:text-base  transition-all duration-200
                        ${activeTab === tab ? "border-b-2 border-white text-white" : "text-gray-400 hover:text-white"}`}
                    >
                        {tab.toUpperCase()}
                    </button>
                ))}
            </div>

            {/* content section */}
            <div className="flex flex-col px-4 py-12 items-center justify-center text-center text-white">
                <div className="bg-neutral rounded-full p-5 mb-4">
                    <MdEdit className="text-4xl sm:text-5xl" />
                </div>
                <h2 className="text-lg sm:text-xl font-medium">
                    Public Post
                </h2>
                <p className="text-sm sm:text-base text-gray-400 mt-1 max-w-md">
                    Posts appear here after you publish and will be visible to your community
                </p>
            </div>
        </div>
    )
}

export default PostTabs;