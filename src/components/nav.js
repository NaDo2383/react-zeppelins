import { BsLinkedin } from "react-icons/bs";

const NavBarCat = ({ navBarCat }) => {
    return (
        <div id="nav">
            {navBarCat.map(nava => (
                <a className="navCat" href="#">{nava}</a>
            ))
            }
        </div >
    )
}


export default function Navbar({ navBarCat }) {
    return (
        <nav>
            <div className="logo">
                <img src={require('./pic/Leap.png')} alt='' />
                <div id='hireMe'>
                    <BsLinkedin />
                    Hire Me
                </div>

            </div>
            <NavBarCat navBarCat={navBarCat} />
        </nav>
    )
}