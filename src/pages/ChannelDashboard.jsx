import { useState } from "react"
import ChannelInfo from "../components/ChannelInfo"
import Navbar from "../components/Header/Navbar"
import PostOptions from "../components/PostOptions"
import PostTabs from "../components/PostTabs"
import Sidebar from "../components/Sidebar"

function ChannelDashboard() {
  const [isSibebarOpen, setIsSidebarOpen] = useState();
  return (
    <div>
            <Navbar toggleSidebar={() => setIsSidebarOpen(!isSibebarOpen)} />
            <div className="flex">
                <Sidebar isOpen={isSibebarOpen} />
                <main className="flex-1 w-full max-w-[40rem]">
                    <ChannelInfo />
                    <PostOptions />
                    <PostTabs />
                </main>
            </div>
        </div>
  )
}

export default ChannelDashboard