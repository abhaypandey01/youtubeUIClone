import { Link } from "react-router-dom";

function VideoCard({video}) {
    return (
        <Link to={`/video/${video.id}`}>
        <div className='card card-compact bg-base-100 rounded-md shadow-md hover:shadow-lg hover:rounded-none transition duration-300 w-[25rem]'>
            <figure>
                <img src={video.thumbnail} alt="thumbnail" className='w-full h-48 object-cover' />
            </figure>
            <div className='card-body flex-row gap-4 p-4'>
                <div className='avatar'>
                    <div className='rounded-full w-10 h-10'>
                        <img src={video.avatar} alt="" />
                    </div>
                </div>
                <div className='flex flex-col justify-start'>
                    <h2 className='font-semibold line-clamp-2'>{video.title}</h2>
                    <p className='text-sm text-gray-500 hover:text-white cursor-pointer'>{video.channel}</p>
                    <p className='text-sm text-gray-500'>{video.views} . {video.time}</p>
                </div>
            </div>
        </div>
        </Link>
    );
}

export default VideoCard;