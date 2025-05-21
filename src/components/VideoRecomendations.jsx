import { videos } from '../data/videos'
import { Link } from 'react-router-dom';

export default function VideoRecomendations({currentVideoId}) {
    const recommended = videos.filter(video => video.id !== parseInt(currentVideoId));

    return(
        <aside className='w-full md:w-80 mt-6 md:mt-0 md:ml-6 space-y-4'>
            <h3 className="text-lg font-semibold mb-2">Up Next</h3>
            {recommended.map((video)=>(
                <Link className='flex gap-3 p-2 hover:bg-base-200 rounded-lg transition' to={`/video/${video.id}`} key={video.id}>
                    <img src={video.thumbnail} alt="thumbnail" className='w-32 h-20 object-cover rounded'/>
                    <div className='flex flex-col '>
                        <p className='text-md text-white line-clamp-2 font-semibold'>{video.title}</p>
                        <p className='text-sm text-gray-400'>{video.channel}</p>
                        <p className='text-sm text-gray-400'>{video.views} . {video.time}</p>
                    </div>
                </Link>
            ))}
        </aside>
    );
}