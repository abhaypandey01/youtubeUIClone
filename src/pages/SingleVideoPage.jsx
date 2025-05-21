import { useParams } from "react-router-dom";
import { videos } from "../data/videos";
import { useState } from "react";
import Navbar from "../components/Header/Navbar";
import Sidebar from "../components/Sidebar";
import VideoRecomendations from "../components/VideoRecomendations";
import VideoActions from "../components/VideoActions";


export default function SingleVideoPage() {
    const { id } = useParams();
    const [isSibebarOpen, setIsSidebarOpen] = useState();
    const video = videos.find((v) => v.id === parseInt(id));

    if (!video) return <div className="p-4 text-2xl text-red-600">Video not found.</div>;

    return (
        <div className="min-h-screen flex flex-col">
            {/* header */}
            <Navbar toggleSidebar={() => setIsSidebarOpen(!isSibebarOpen)} />
            {/* main content */}
            <div className="flex flex-1">
                {/* sidebar */}
                <Sidebar isOpen={isSibebarOpen} />

                {/* main video content */}
                <main className="flex-1 p-4">
                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* video display section */}
                        <div className="flex-1">
                            <div className="w-full aspect-video rounded-md bg-black overflow-hidden mb-4">
                                <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h2 className="text-xl font-bold mb-2">{video.title}</h2>

                            <div className="flex items-center gap-4 mb-4">
                                <div className="avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={video.avatar} />
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">{video.views} . {video.time}</p>
                                    <p className="text-lg font-semibold text-white">{video.channel}</p>
                                </div>
                            </div>

                            <VideoActions />
                            
                            <div className="bg-gray-800 text-gray-200 rounded-md p-3 md:p-4 mb-4 text-sm md:text-base break-words">
                                This is mock description for video.
                            </div>
                        </div>

                        {/* recommendations */}
                        <div className="w-full lg:w-80">
                            <VideoRecomendations />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}