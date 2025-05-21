import Navbar from "../components/Header/Navbar";
import Sidebar from "../components/Sidebar";
import VideoGrid from "../components/VideoGrid";

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="flex">
                <div className="hidden md:block sticky top-16 h-[calc(100vh-4rem)]">
                    <Sidebar />
                </div>
                <main className="flex-1">
                    <VideoGrid />
                </main>
            </div>
        </div>
    );
}