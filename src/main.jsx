import React from "react";
import App from './App';
import ReactDOM from "react-dom/client";   //import { ReactDOM } from "react-dom/client";  //??   utilisée pour rendre des composants React dans le DOM
import { BrowserRouter } from "react-router-dom"; //? définir des routes pour différents composants et gérer la navigation entre eux de manière réactive.
import "bootstrap/dist/css/bootstrap.min.css";  //dist as distribution;
import './index.css';


// notes react querry  facilite la mise en cache des données, la gestion des requêtes réseau 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
);


