import React from "react";
import { Link } from "react-router-dom";

export default function Searchbar() {
  return (
    <div>
      <input
        type="text"
        className="fontAwesome"
        placeholder="&#xf002; Search Twitter "
      ></input>
      <div className="latest-news">
        <div className="trending">
          <h5>
            <b>What's happening</b>
          </h5>
        </div>
        <div className="trending">
          <h6>Trending in india</h6>
          <h6>#covid19</h6>
          <h6>132k tweets</h6>
        </div>
        <div className="trending">
          <h6>Trending in india</h6>
          <h6>#covid19</h6>
          <h6>132k tweets</h6>
        </div>
        <div className="trending">
          <h6>Trending in india</h6>
          <h6>#covid19</h6>
          <h6>132k tweets</h6>
        </div>
        <div className="trending">
          <h6>Trending in india</h6>
          <h6>#covid19</h6>
          <h6>132k tweets</h6>
        </div>
        <div className="trending">
          <h6>Trending in india</h6>
          <h6>#covid19</h6>
          <h6>132k tweets</h6>
        </div>
      </div>
    </div>
  );
}
