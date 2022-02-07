import React from "react";
import { Link } from "react-router-dom";

export default function Mainbar() {
  return (
    <div>
      <div className="row" id="home">
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1"><b>Home</b></span>
        </nav>
      </div>
      <div className="card">
        <div className="row">
          <img
            src="https://m.media-amazon.com/images/I/51vzc+DFTJL._SX522_.jpg"
            alt=""
          ></img>
          <h5 className="card-title">
            Narendra Modi <span>@narendramodi .3h</span>
          </h5>
        </div>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <img
          className="card-img-top"
          src="https://images.unsplash.com/photo-1527352675495-d54e8f102689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNDIwNTM1fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
          alt="Card image cap"
        ></img>
        <div className="row">
          <i className="fa fa-comment-o">1.8k</i>
          <i className="fa fa-retweet">8.5k</i>
          <i className="fa fa-heart-o">49.3k</i>
          <i className="fa fa-share"></i>
        </div>
      </div>
      <div className="card">
        <div className="row">
          <img
            src="https://m.media-amazon.com/images/I/51vzc+DFTJL._SX522_.jpg"
            alt=""
          ></img>
          <h5 className="card-title">
            Narendra Modi <span>@narendramodi .3h</span>
          </h5>
        </div>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <img
          className="card-img-top"
          src="https://images.unsplash.com/photo-1527352675495-d54e8f102689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNDIwNTM1fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
          alt="Card image cap"
        ></img>
        <div className="row">
          <i className="fa fa-comment-o">1.8k</i>
          <i className="fa fa-retweet">8.5k</i>
          <i className="fa fa-heart-o">49.3k</i>
          <i className="fa fa-share"></i>
        </div>
      </div>
      <div className="card">
        <div className="row">
          <img
            src="https://m.media-amazon.com/images/I/51vzc+DFTJL._SX522_.jpg"
            alt=""
          ></img>
          <h5 className="card-title">
            Narendra Modi <span>@narendramodi .3h</span>
          </h5>
        </div>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <img
          className="card-img-top"
          src="https://images.unsplash.com/photo-1527352675495-d54e8f102689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNDIwNTM1fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
          alt="Card image cap"
        ></img>
        <div className="row">
          <i className="fa fa-comment-o">1.8k</i>
          <i className="fa fa-retweet">8.5k</i>
          <i className="fa fa-heart-o">49.3k</i>
          <i className="fa fa-share"></i>
        </div>
      </div>
    </div>
  );
}
