import { useState } from "react";

function CommentInput() {

    const [isFocused, setIsFocused] = useState(false);
    const [comment, setComment] = useState('');

    const handleFocus = () => setIsFocused(true);
    const handleCancel = () => {
        setIsFocused(false);
        setComment('');
    };

    return (
        <>
        <div className="flex items-start gap-4 py-4">
        {/* avatar */}
        <div className="w-10 h-10 flex items-center justify-center bg-blue-700 text-white font-bold rounded-full">
            A
        </div>

        {/* input field */}
        <div className="flex-1">
        <input 
        type="text"
        className="w-full bg-transparent border-b outline-none border-white/30 focus:border-white/70 transition-all py-2"
        onFocus={handleFocus}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        />

        {/* action buttons */}
        {isFocused && (
            <div className="flex justify-end items-center mt-3 gap-3">
                <button 
                onClick={handleCancel}
                className="text-sm text-white focus:underline">
                    Cancel
                </button>
                <button 
                disabled={!comment.trim()}
                className={`text-sm transition-all rounded-full px-3 py-1 
                    ${comment.trim() ? 'bg-blue-500 focus:bg-blue-600 text-white' : 
                        'bg-white/10 text-gray-400 cursor-not-allowed'}`}
                >
                    Comment
                </button>
            </div>
        )}
        </div>
        </div>
        </>
    );
}

export default CommentInput;