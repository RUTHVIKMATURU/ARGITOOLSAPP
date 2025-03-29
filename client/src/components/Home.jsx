import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="bg-success bg-opacity-50">
    <div className="container-fluid text-white text-center d-flex align-items-center justify-content-center vh-100">
      <div className="container p-5 rounded shadow-lg bg-dark bg-opacity-75">
          <h1 className="display-4 fw-bold">🌾 Agricultural Marketplace</h1>
          <p className="lead mt-3">
            Connecting Farmers with Essential Resources.<br />
            Rent, Buy, or Sell Agricultural Tools, Equipment, and Seeds.
          </p>
          <div className="mt-4">
            <Link to="/login" className="btn btn-success btn-lg mx-2">
              Get Started
            </Link>
            <Link to="/farmer-dashboard" className="btn btn-outline-light btn-lg mx-2">
              Explore as Farmer
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
