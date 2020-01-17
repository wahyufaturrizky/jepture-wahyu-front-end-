import React from 'react'
import Link from 'next/link'

const SideBar = () => {
  return (
      <div className="main-sidebar sidebar-style-2">
        <aside id="sidebar-wrapper">
          <div className="sidebar-brand">
            <Link as="/dashboard/DashboardAdmin" href="/dashboard/"><a>Stisla</a></Link>
          </div>
          <div className="sidebar-brand sidebar-brand-sm">
            <Link as="/dashboard/DashboardAdmin" href="/dashboard/"><a>St</a></Link>
          </div>
          <ul className="sidebar-menu">
            <li className="menu-header">Dashboard</li>
            <li className="dropdown">
              <a href="#" className="nav-link has-dropdown"><i className="fas fa-fire" /><span>Dashboard</span></a>
              <ul className="dropdown-menu">
                <li><Link as="/dashboard/DashboardAdmin" href="/dashboard/"><a className="nav-link" href="index-0.html">General Dashboard</a></Link></li>
              </ul>
            </li>
            <li className="menu-header">Pages</li>
            <li className="dropdown">
              <a href="#" className="nav-link has-dropdown"><i className="fas fa-bicycle" /> <span>Features</span></a>
              <ul className="dropdown-menu">
                <li><Link as="/post/CreatePost" href="/post/"><a className="nav-link">Post Create</a></Link></li>
                <li><Link as="/post/Post" href="/post/"><a className="nav-link">Posts</a></Link></li>
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