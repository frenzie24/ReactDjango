import { Link, useLocation } from 'react-router-dom';
import '../App.css'
export default function NavBar() {
  const currentPage = useLocation().pathname;

  const renderCursor = (path) => {

    return currentPage === path && <span className="blinking-cursor"></span>;
  };


  const handleAnimationComplete = () => {
    setHidden(false);
  };

  return (

    <nav className='lg:w-fit xs:w-full sm:w-full flex flex-row flex-wrap justify-center items-center z-50 text-white bg-gray-800 text-2xl p-1 rounded-md'>

      <ul className=" flex flex-row flex-wrap justify-center items-center [&_*]:text-white [&_*]:w-fit [&_*]:bg-grey-800  [&_*]:px-1">
        <li className="nav-item bg-grey-800 hover:bg-gray-500 ">
          <Link to="/" className={currentPage === '/' ? 'nav-link active bg-gray-500' : 'nav-link'}>
            Home
          </Link>
        </li>
        <li className="nav-item hover:bg-gray-500 "><Link to="/RoleList" className={currentPage === '/RoleList' ? 'nav-link active bg-gray-500' : 'nav-link'}>Roles</Link></li>
        <li className="nav-item hover:bg-gray-500 "><Link to="/UserList" className={currentPage === '/UserList' ? 'nav-link active bg-gray-500' : 'nav-link'}>Users</Link></li>

      </ul>
    </nav>
  )
}
