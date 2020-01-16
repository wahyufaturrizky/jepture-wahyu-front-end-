import React from 'react'
import Link from 'next/link'

const SideBar = () => {
  return (
      <div className="main-sidebar sidebar-style-2">
        <aside id="sidebar-wrapper">
          <div className="sidebar-brand">
            <Link href="/dashboard/DashboardAdmin"><a>Stisla</a></Link>
          </div>
          <div className="sidebar-brand sidebar-brand-sm">
            <a href="index.html">St</a>
          </div>
          <ul className="sidebar-menu">
            <li className="menu-header">Dashboard</li>
            <li className="dropdown active">
              <a href="#" className="nav-link has-dropdown"><i className="fas fa-fire" /><span>Dashboard</span></a>
              <ul className="dropdown-menu">
                <li><Link href="/dashboard/DashboardAdmin"><a className="nav-link" href="index-0.html">General Dashboard</a></Link></li>
              </ul>
            </li>
            <li className="menu-header">Pages</li>
            <li className="dropdown">
              <a href="#" className="nav-link has-dropdown"><i className="fas fa-bicycle" /> <span>Features</span></a>
              <ul className="dropdown-menu">
                <li><Link href="/post/CreatePost"><a className="nav-link">Post Create</a></Link></li>
                <li><Link href="/post/Post"><a className="nav-link">Posts</a></Link></li>
              </ul>
            </li>
          </ul>
          <div className="mt-4 mb-4 p-3 hide-sidebar-mini">
            <a target="_blank" href="https://www.linkedin.com/in/wahyu-fatur-rizky/" className="btn btn-primary btn-lg btn-block btn-icon-split">
              <i className="fas fa-rocket" /> Profil Wahyu Fatur Rizki
            </a>
          </div>
        </aside>
      </div>
  )
}

export default SideBar;