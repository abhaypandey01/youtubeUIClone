import { useState } from "react";
import { FaBell, FaShare, FaThumbsDown, FaThumbsUp } from "react-icons/fa";


function VideoActions() {
    const [liked, setLiked] = useState(false);
    const [disLiked, setDisLiked] = useState(false);
    const [subscribed, setSubscribed] = useState(false);

    const isLiked = ()=>{
        setLiked(!liked);
        if(disLiked) setDisLiked(false);
    }

    const isDisliked = () => {
        setDisLiked(!disLiked);
        if(liked) setLiked(false);
    }

    const isSubscribed = () => {
        setSubscribed(!subscribed);
    }

    return (
        <div className="flex flex-wrap mt-4 gap-4 items-center w-full">
            <button
            onClick={isLiked}
            className={`btn btn-sm ${liked ? 'btn-primary' : 'btn-ghost'}`}
            >
                <FaThumbsUp />
                Like
            </button>
            <button
            onClick={isDisliked}
            className={`btn btn-sm ${disLiked ? 'btn-error': 'btn-ghost'}`}
            >
                <FaThumbsDown />
                Dislike
            </button>
            <button className="btn btn-sm btn-ghost">
                <FaShare />
                Share
            </button>
            <button
            onClick={isSubscribed}
            className={`btn btn-sm ${subscribed ? 'btn-primary' : 'btn-ghost'}`}
            >
                <FaBell />
                {subscribed ? 'Subscribed' : 'Subscribe'}
            </button>
        </div>
    )
}

export default VideoActions;