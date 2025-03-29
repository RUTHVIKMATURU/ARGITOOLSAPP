import { Link } from "react-router-dom";
import { useUser, SignOutButton } from "@clerk/clerk-react";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const { isSignedIn } = useUser();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          🌾 AgriMarket
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            


            <li className="nav-item">
              <Link className="nav-link" to="/farmer-dashboard">Buyer</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/seller-dashboard">Seller</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/rental-dashboard">Rentals</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">Profile</Link>
            </li>
            {!isSignedIn ? (
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            ) : (
              <li className="nav-item">
                <SignOutButton>
                  <button className="btn btn-light">Logout</button>
                </SignOutButton>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
