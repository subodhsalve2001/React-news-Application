import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-info  ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">News</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" to="/">Home</Link>
              <Link className="nav-link active" to="/ent">Entertainment</Link>
              <Link className="nav-link active" to="/sports">Sports</Link>
              <Link className="nav-link active" to="/tech">Technology</Link>
              <Link className="nav-link active" to="/business">Business</Link>

            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
