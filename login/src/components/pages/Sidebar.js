import React from "react";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div>
      <div>
        <i className="fa fa-twitter"></i>
      </div>
      <div>
      <a href="/home">
        <i className="fa fa-home"></i></a>
      </div>
      <div>
        <i className="fa fa-hashtag" aria-hidden="true"></i>
      </div>
      <div>
        <i className="fa fa-bell-o" aria-hidden="true"></i>
      </div>
      <div>
        <i className="fa fa-envelope-o" aria-hidden="true"></i>
      </div>
      <div>
        <a href="/home/profile">
        <i className="fa fa-user-o" aria-hidden="true"></i></a>
      </div>
      <div>
        <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
      </div>
    </div>
  );
}
