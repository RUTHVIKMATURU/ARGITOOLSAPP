import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react"; 
import SignIn  from "./components/SignIn";
import Home from './components/Home'
import BuyerDashboard from "./components/farmer/BuyerDashboard";
import SellerDashboard from "./components/farmer/SellerDashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
import Navbar from "./Navbar";
import RentalDashboard from "./components/farmer/rentalDashboard";
import FarmerProfile from "./components/farmer/FarmerProfile";


const clerkPubKey=import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function App() {
  

  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<SignIn />}/>
          <Route path="/farmer-dashboard" element={<BuyerDashboard />}/>
          <Route path="/seller-dashboard" element={<SellerDashboard />}/>
          <Route path="/rental-dashboard" element={<RentalDashboard/>}/>
          
          <Route path="/profile" element={<FarmerProfile/>}/>
        </Routes>
      </Router>
    </ClerkProvider>
  )
}

export default App
