import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SportsIcon from '@mui/icons-material/Sports';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import { Link } from 'react-router-dom';

const SIdebar = () => {
    return (
        <>
            <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="default-sidebar" className=" pt-[10vh] fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidenav">
                <div className="overflow-y-auto py-5 px-3 h-full border-r bg-gray-800 bg-opacity-40 border-gray-700">
                    <ul className="space-y-2">
                        <li draggable="false">
                            <Link to="/" draggable="false" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <HomeIcon />
                                <span className="ml-3">Home</span>
                            </Link>
                        </li>
                        <li draggable="false">
                            <Link to="/dashboard/teams" draggable="false" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <GroupsIcon />
                                <span className="ml-3">Teams</span>
                            </Link>
                        </li>
                        <li draggable="false">
                            <Link to="/dashboard/players" draggable="false" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <PersonIcon />
                                <span className="ml-3">Players</span>
                            </Link>
                        </li>
                        <li draggable="false">
                            <Link to="/dashboard/tournaments" draggable="false" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <SportsEsportsIcon />
                                <span className="ml-3">Tournaments</span>
                            </Link>
                        </li>
                        <li draggable="false">
                            <Link to="/dashboard/matches" draggable="false" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <SportsIcon />
                                <span className="ml-3">Matches</span>
                            </Link>
                        </li>
                        <li draggable="false">
                            <Link to="/dashboard/sponsors" draggable="false" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <MonetizationOnIcon />
                                <span className="ml-3">Sponsors</span>
                            </Link>
                        </li>
                        <li draggable="false">
                            <Link to="/dashboard/misc" draggable="false" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <MiscellaneousServicesIcon />
                                <span className="ml-3">Miscellaneous</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default SIdebar