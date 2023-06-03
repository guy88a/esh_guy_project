import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="space__navbar">
            <div className="space__navbar__navbar-content">
                <nav>
                    <NavLink to="/" className="space__navbar__navbar-content__button">Home</NavLink>
                    <NavLink to="/blog" className="space__navbar__navbar-content__button">Blog</NavLink>
                </nav>
                {/* <div className="space__navbar__navbar-content__button">
                    Home
                </div>
                <div className="space__navbar__navbar-content__button">
                    Blog
                </div> */}
            </div>
        </div>
    )
}

export default Navbar;