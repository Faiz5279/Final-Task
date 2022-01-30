import React from 'react';


const Nav = () => {
  return <div>
    <div id="nav">

      <div id="tmpsrch">
        <input placeholder="Search..." type="text" name="searchbar" id="tmpsrchh" />
      </div>

      <div className="samepointer" id="leftnav">
        <div id="ltnh"><h1>Autum</h1></div>
      </div>

      <div className="samepointer" id="centernav">
        <div id="dot"></div>
        <a href="#">HOME</a>
        <a href="#">IMPORT</a>
        <a href="#">EXPLORE</a>
        <a href="#">STATS</a>
        <a href="#">CHALLENGES</a>
      </div>

      <div className="samepointer" id="rightnav">
        <div id="icover">
          <i className="ri-search-line"></i>
        </div>
        <div id="iicover"><input placeholder="Search" type="text" /></div>
        <div id="grp">
          <i className="ri-account-circle-line"></i>
          <i className="ri-arrow-drop-down-fill"></i>
        </div>
        <div id="drpdn">
          <h5>History</h5>
          <hr />
          <h5>Watchlist</h5>
          <hr />
          <h5>Account</h5>
          <hr />
          <h5>Logout</h5>
        </div>
      </div>
      <div id="rspd">
        <div id="rspdone"><i className="ri-search-line"></i></div>
        <div id="rspdtwo"><i className="ri-menu-line"></i></div>
      </div>
    </div>
  </div>;

};

export default Nav;
