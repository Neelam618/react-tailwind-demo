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
            <div className="px-2 pt-2 pb-4 sm:flex sm:p-0">
                <a className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2" href="#">List your property</a>
                <a className="block mt-1 px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2" href="#">Trips</a>
                <a className="block mt-1 px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2" href="#">Messages</a> 
            </div>
            <AccountDropdown />
        </header>
    )
}
export default Navbar;