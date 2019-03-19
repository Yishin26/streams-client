import React from "react";
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/streams-client/" className="item header">
        <h2>ReactStreamer</h2>
      </Link>

      <div className="right menu">
        <Link to="/streams-client/" className="item">
          All Streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};


export default Header;
