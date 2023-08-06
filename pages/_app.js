import "bootstrap/scss/bootstrap.scss?v=1.0.6"

import "../styles/global.css"
import { useEffect } from "react";

const MyApp = ({ Component, pageProps }) => {

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
      }, []);
    return <Component {...pageProps} />
  } 
  export default MyApp
   