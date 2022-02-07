import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from "./Sidebar";
import Mainbar from "./Mainbar";
import Searchbar from "./Searchbar";

import "../../App.css";

export default function Profile() {
  return (
    <div>
      <div className="row">
        <div className="col-2 sidebar">
          <Sidebar></Sidebar>
        </div>

        <div className="col-6 profile mainbar">
          <div>
            <img
              src="https://wallpaperaccess.com/full/3915854.jpg"
              className="card-img-top"
            ></img>
            <div className="card-body">
              <button className="btn btn-light">Edit profile</button>
            </div>
          </div>
          <div className="main">
            <div className="content">
              <h5>
                <b>Rahul Kumar</b>
              </h5>
              <h6>@RahulKu77981478</h6>
              <h6>Joined January 2022</h6>
              <h6>1 Following 0 Followers</h6>
            </div>
            <h6>Tweets</h6>
            <h6>Rahul Kumar @RahulKu77981478 </h6>
            <h6>Hello</h6>
            <i className="fa fa-comment-o"></i>
            <i className="fa fa-retweet"></i>
            <i classNam="fa fa-heart-o"></i>
            <i className="fa fa-share"></i>
            <div>
              <h5>
                <b>Who to follow</b>
              </h5>
            </div>
            <div className="follow">
              <div className="pmo">
                <img
                  className="img"
                  src="https://cdn4.iconfinder.com/data/icons/forum-buttons-and-community-signs-1/794/profile-3-512.png"
                ></img>
                <b>PMO India</b>
                <button className="btn btn-light">
                  <span>Follow</span>
                </button>
                <h6>@PMOIndia</h6>
                <h6>Office of the Prime Minister of India</h6>
              </div>
              <div className="pmo">
                <img
                  className="img"
                  src="https://cdn4.iconfinder.com/data/icons/forum-buttons-and-community-signs-1/794/profile-3-512.png"
                ></img>
                <b>PMO India</b>
                <button className="btn btn-light">
                  <span>Follow</span>
                </button>
                <h6>@PMOIndia</h6>
                <h6>Office of the Prime Minister of India</h6>
              </div>
              <div className="pmo">
                <img
                  className="img"
                  src="https://cdn4.iconfinder.com/data/icons/forum-buttons-and-community-signs-1/794/profile-3-512.png"
                ></img>
                <b>PMO India</b>
                <button className="btn btn-light">
                  <span>Follow</span>
                </button>
                <h6>@PMOIndia</h6>
                <h6>Office of the Prime Minister of India</h6>
              </div>
            </div>
            <h5><b>Topics to follow</b></h5>
            <h6>
              Tweets about the Topics you follow show up in your Home timeline
            </h6>
            <button className="btn btn-light topics">Cricket</button>
            <button className="btn btn-light topics">Indian TV</button>
            <button className="btn btn-light topics">Investing</button>
            <button className="btn btn-light topics">Football</button>
            <button className="btn btn-light topics">Sports</button>
            <button className="btn btn-light topics">Bussiness</button>
            <button className="btn btn-light topics">BTS</button>
            <button className="btn btn-light topics">Actors</button>
            <button className="btn btn-light topics">Cinema</button>
            <button className="btn btn-light topics">Film industry</button>
            <button className="btn btn-light topics">Cryptocurrency</button>
            <button className="btn btn-light topics">Hockey</button>
          </div>
        </div>

        <div className="col-4 searchbar">
          <Searchbar></Searchbar>
        </div>
      </div>
    </div>
  );
}
