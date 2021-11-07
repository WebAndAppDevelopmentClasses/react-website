import React from 'react'
import { Link } from "react-router-dom";

function Error404() {
    return (
        <div id="404">
        <center>
          <p className="mt-7 text-white">Uh Oh! This page was not found</p>
          <p className="mt-7 text-white">If you think this is a mistake pls tell us on our youtube channel</p>
          <p className="mt-7 text-white">You can visit our homepage</p>
          <Link to="/"><button className="bg-yellow-500 text-white p-3 mt-4 mx-3 my-3">Visit Home</button></Link>
          <a href="https://www.youtube.com/channel/UCAp1VvnTMHTGmNTf-lrBqmg" target="_webandapp"><button className="bg-yellow-500 text-white p-3 mt-4 mx-3 my-3">Visit Channel</button></a>
        </center>
      </div>      
    )
}

export default Error404
