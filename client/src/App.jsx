import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react"; 
import SignIn  from "./components/SignIn";
import Home from './components/Home'
import FarmerDashboard from "./components/farmerDashboard/FarmerDashboard";
import SellerDashboard from "./components/sellerDashboard/SellerDashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
import Navbar from "./Navbar";


const clerkPubKey=import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function App() {
  

  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<SignIn />}/>
          <Route path="/farmer-dashboard" element={<FarmerDashboard />}/>
          <Route path="/seller-dashboard" element={<SellerDashboard />}/>
        </Routes>
      </Router>
    </ClerkProvider>
  )
}

export default App
