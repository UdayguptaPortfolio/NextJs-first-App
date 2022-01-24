import Link from "next/link";
import Head from "next/head"
import Navbar from "./Navbar";

const home=()=>{
  return(
    <div>
      <Head>
      <title>Home Page</title>
      <meta name="description" content="Free Web tutorials"/>
  <meta name="keywords" content="HTML, CSS, JavaScript"/>
  <meta name="author" content="John Doe"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
{/* <nav>
  <ul className='menu-bar'>
    <li>
    <Link href='/'>
      <a >Home</a>
    </Link></li>
    <li>
    <Link href='/About'>
      <a >About</a>
    </Link></li>
    <li>
    <Link href='/contact/Contact'>
      <a >Contact</a>
    </Link></li>

  </ul>
</nav> */}
      {/* <h1>Hello World</h1> */}
      <Navbar/>
    </div>
  )
}

export default home;