import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const handleLogOut = () => {
    logOutUser()
      .then()
      .catch((error) => console.log(error));
  };

  const navItems = (
    <>
      <li>
        <Link to="/categories/0">Home</Link>
      </li>
      <li>
        <Link to="/blog">Blogs</Link>
      </li>
      <li>
        <Link to="/allPostToys">All Toys</Link>
      </li>
      {user ? (
        <>
          <li>
            <Link to="/postToys">Add Toys</Link>
          </li>
          <li>
            <Link to="/myToys">My Toys</Link>
          </li>
          <li>
            <img
              className="w-20"
              src={user.photoURL}
              alt="user photo"
              title={user.displayName}
            />
          </li>
          <li>
            <button
              onClick={handleLogOut}
              className="text-white bg-red-500 px-5 py-1"
            >
              Logout
            </button>
          </li>
        </>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <nav className="shadow-md">
      <div className="navbar max-w-screen-xl mx-auto bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">
            E-Toy Car Store
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
