import { FaBars, FaBell, FaMicrophone, FaVideo } from "react-icons/fa"
import { FiSearch } from "react-icons/fi"

function Navbar() {
    return (
        <div className="navbar bg-base-100 sticky px-4 shadow-sm top-0 z-50">
            {/* right section */}
            <div className="flex items-center gap-4">
                <a href="#" className="text-xl font-bold text-red-600">YouTube</a>
            </div>

            {/* center section */}
            <div className="flex flex-1 justify-center">
                <div className="form-control w-full max-w-xl">
                    <div className="input-group">
                        <input type="text" className="input input-bordered w-full"/>
                        <button className="btn btn-square bg-base-200">
                        <FiSearch />
                        </button>
                    </div>
                </div>
                <button className="btn btn-ghost btn-circle ml-2">
                    <FaMicrophone className="text-lg"/>
                </button>
            </div>

            {/* left section */}
            <div className="flex items-center gap-2">
                <button className="btn btn-ghost btn-circle">
                    <FaVideo className="text-xl" />
                </button>
                <button className="btn btn-ghost btn-circle">
                    <FaBell className="text-xl" />
                </button>
                <div className="avatar">
                    <div className="w-8 rounded-full">
                        <img src="https://i.pravatar.cc/300" alt="user" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;