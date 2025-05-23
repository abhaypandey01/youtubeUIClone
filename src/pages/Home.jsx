import { useState } from "react";
import Navbar from "../components/Header/Navbar";
import Sidebar from "../components/Sidebar";
import VideoGrid from "../components/VideoGrid";

export default function Home() {
    const [isSibebarOpen, setIsSidebarOpen] = useState();
    return (
        <div>
            <Navbar toggleSidebar={() => setIsSidebarOpen(!isSibebarOpen)} />
            <div className="flex">
                <Sidebar isOpen={isSibebarOpen} />
                <main className="flex-1">
                    <VideoGrid />
                </main>
            </div>
        </div>
    );
}