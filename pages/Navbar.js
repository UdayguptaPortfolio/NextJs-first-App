import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="menu-bar">
          <li>
            <Link href="/">
              <a> Home </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a> About </a>
            </Link>
          </li>
          <li>
            <Link href="/contact/Contact">
              <a> Contact </a>
            </Link>
          </li>
          <li>
            <Link href="/blog/blog1">
              <a> Blog </a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;