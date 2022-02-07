import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from "./Sidebar";
import Mainbar from "./Mainbar";
import Searchbar from "./Searchbar";

import "../../App.css";
// import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div>
      <div className="row">
        <div className="col-2 sidebar">
          <Sidebar></Sidebar>
        </div>

        <div className="col-6 mainbar">
          <Mainbar></Mainbar>
        </div>

        <div className="col-4 searchbar">
          <Searchbar></Searchbar>
        </div>
      </div>
    </div>
  );
}
