import VideoCard from "./VideoCard"
import { videos } from "../data/videos"

function VideoGrid() {
  return (
    <div className="p-4 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
        ))}
    </div>
  )
}

export default VideoGrid;