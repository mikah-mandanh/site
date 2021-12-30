import './App.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { Home } from './components/Home'
import { About } from './components/About'
import { ContactUs } from './components/ContactUs';
import { Consult } from './components/Consult';
import { Design } from './components/Design'
import { Reseller } from './components/Reseller'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFZilx1RVdwEiLGEJYoVPWEy-ca9frAE0",
  authDomain: "corp-site-9f14c.firebaseapp.com",
  projectId: "corp-site-9f14c",
  storageBucket: "corp-site-9f14c.appspot.com",
  messagingSenderId: "11607933514",
  appId: "1:11607933514:web:d17240b3661183a42adcb3",
  measurementId: "G-9F0HRSPDYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/consult" element={<Consult />} />
      <Route path="/design" element={<Design />} />
      <Route path="/reseller" element={<Reseller />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
