import {useState} from 'react';

function AccountDropdown() {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div className="relative">
            <button onClick={() => setShowDropdown(!showDropdown)} className="block relative z-50 h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:border-white focus:outline-none">
                <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80" alt="Your avatar" />
            </button>
            {showDropdown ? (
                <button onClick={() => setShowDropdown(false)} tabIndex="-1" className="fixed z-10 inset-0 bg-black opacity-50 cursor-default h-full w-full"></button>
            ) : null}
            {showDropdown ? (
                 <div className="absolute right-0 z-10 w-48 mt-2 py-2 bg-white rounded-lg shadow-xl">
                 <a className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white" href="#">Account settings</a>
                 <a className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white" href="#">Support</a>
                 <a className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white" href="#">Sign out</a>
             </div>
            ) : null}
        </div>
    )
}
export default AccountDropdown;