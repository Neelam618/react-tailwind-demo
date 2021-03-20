import LogoInverted from './logo-inverted.png'
import AccountDropdown from './AccountDropdown';

function Navbar() {
    return (
        <header className="bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
            <div className="flex items-center justify-between px-4 py-3 sm:p-0">
                <div>
                    <img className="h-8" src={LogoInverted} alt="Workcation"/>
                </div>
                <div className="sm:hidden">
                    <button type="button" className="text-gray-500 focus:text-white focus:outline-none hover:text-white">
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                        </svg>
                    </button>
                </div>
            </div>
            <nav className="">
                <div className="px-2 pt-2 pb-4 sm:flex sm:p-0">
                    <a className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2" href="#">List your property</a>
                    <a className="block mt-1 px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2" href="#">Trips</a>
                    <a className="block mt-1 px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2" href="#">Messages</a> 
                    <div class="sm:ml-6 hidden sm:block">
                        <AccountDropdown />
                    </div>
                </div>
                <div className="px-4 py-5 border-t border-gray-800 sm:hidden">
                    <div className="flex items-center">
                        <img className="h-8 w-8 rounded-full object-cover border-2 border-gray-600" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80" alt="Your avatar" />
                        <span className="ml-3 text-white font-semibold">Jane Doe</span>
                    </div>
                    <div className="mt-4">
                        <a className="block text-gray-400 hover:text-white" href="#">Account settings</a>
                        <a className="block text-gray-400 hover:text-white mt-2" href="#">Support</a>
                        <a className="block text-gray-400 hover:text-white mt-2" href="#">Sign out</a>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Navbar;