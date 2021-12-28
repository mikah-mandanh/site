import logo from './logo.svg';
import './App.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
