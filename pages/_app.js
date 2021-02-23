import "../styles/globals.css";
import Navbar from "../components/navbar";
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return [
  
    <Navbar></Navbar>,
    <Component {...pageProps} />,
  ];
}

export default MyApp;
