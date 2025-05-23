import { BiPoll } from "react-icons/bi";
import { MdImage, MdPoll, MdQuiz } from "react-icons/md";


function PostOptions() {
    return (
        <div className="flex flex-col w-full mt-2 mb-2">
            <div className="flex-1 flex py-2 px-1 mt-1 mb-1">
                <div>
                    <div className="flex items-center justify-center rounded-full bg-blue-600 w-10 h-10 mx-1 font-semibold">
                        A
                    </div>
                </div>
                <div className="w-full">
                    <p className="py-2 px-2 font-semibold">Alam Durib</p>
                </div>
                <div className="flex justify-end w-full">
                    <p className="py-2 px-2 mr-2 text-gray-500">Visibility: Public</p>
                </div>
            </div>


            <div className="mb-1 w-full px-1">
                <input
                    placeholder="Post an update to your fans"
                    className="py-2 px-1 w-full"
                    type="text" />
            </div>


            <div className="flex py-2 px-1 mb-2">
                <div className="flex mr-6">
                    <button className="px-1 py-1 font-semibold flex">
                        <MdImage size={25} /> Image
                    </button>
                </div>
                <div className="flex w-full max-w-[7rem] mr-6">
                    <button className="px-1 py-1 font-semibold flex">
                        <MdPoll size={25} /> Image Poll
                    </button>
                </div>
                <div className="flex mr-6">
                    <button className="px-1 py-1 font-semibold flex">
                        <BiPoll size={25} /> Poll
                    </button>
                </div>
                <div className="flex mr-6">
                    <button className="px-1 py-1 font-semibold flex">
                        <MdQuiz size={25} /> Post
                    </button>
                </div>
                <div className="w-full flex justify-end">
                    <button className="mr-6 px-4 py-1 font-semibold rounded-full bg-gray-700 text-gray-500">
                        Post
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PostOptions;