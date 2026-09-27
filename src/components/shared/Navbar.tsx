import Link from "next/link";
import Image from "next/image";
const link = (
  <>
    <li>
      <Link href="/workouts">Workouts</Link>
    </li>
    <li>
      <Link href="/myPlan">My Plan</Link>
    </li>
  </>
);
const Navbar = () => {
  return (
    <nav className="bg-base-100 shadow-sm">
      <div className="navbar w-7xl mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <div className="flex justify-baseline text-2xl font-bold gap-1">
            <Image src="/logo.png" width={30} height={30} alt="Image"></Image>
            <span>FITLOG</span>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end gap-1">
          <span>Plan</span>
          <a className="btn bg-[#C2F800] rounded-full">0</a>

          <span>Saved</span>
          <a className="btn  rounded-full">0</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
