import React, { Component } from 'react'
import Link from 'next/link'
import axios from 'axios' 
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'

class EditPost extends Component {

  state = {
    title: this.props.user.title,
    author: this.props.user.author,
    category_name: this.props.user.category_name,
    body_post: this.props.user.body_post,
    status_post: this.props.user.status_post,
    created_at: this.props.user.created_at,
    update_at: this.props.user.update_at
  }

  handleSubmit = event => {
    event.preventDefault();

    const posts = {
      title: this.state.title, 
      author: this.state.author, 
      category_name: this.state.category_name, 
      body_post: this.state.body_post, 
      status_post: this.state.status_post, 
      created_at: this.state.created_at,
      update_at: this.state.update_at
    };

    axios.put(`https://my-json-server.typicode.com/wahyufaturrizky/jepture-wahyu-front-end-/jsonusers/${this.props.user.id}`, posts)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(error => {

      console.log(error);
    });
  }

  render (props) {
    return (
      <>
        <Head>
          <meta charSet="UTF-8" />
          <meta content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no" name="viewport" />
  
          {/* Favicon */}
          <link rel="icon" href="../../../../../static/assets/img/stisla.ico" />
  
          {/* Title Page */}
          <title>View Post &mdash; Stisla</title>
  
          {/* General CSS Files */}
          <link rel="stylesheet" href="../../../../../static/assets/modules/bootstrap/css/bootstrap.min.css" />
          <link rel="stylesheet" href="../../../../../static/assets/modules/fontawesome/css/all.min.css" />
  
          {/* CSS Libraries */}
          <link rel="stylesheet" href="../../../../../static/assets/modules/bootstrap-social/bootstrap-social.css" />
  
          {/* Template CSS */}
          <link rel="stylesheet" href="../../../../../static/assets/css/style.css" />
          <link rel="stylesheet" href="../../../../../static/assets/css/components.css" />
  
          {/* Start GA */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-94034622-3" />
  
          <script dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'UA-94034622-3');`}}
          />
          {/* END GA */}
          
        </Head>
  
        <div id="app">
          <div className="main-wrapper main-wrapper-1">
            {/* Nav Bar */}
            <div className="navbar-bg" />
            <nav className="navbar navbar-expand-lg main-navbar">
              <form className="form-inline mr-auto">
                <ul className="navbar-nav mr-3">
                  <li><a href="#" data-toggle="sidebar" className="nav-link nav-link-lg"><i className="fas fa-bars" /></a>
                  </li>
                  <li><a href="#" data-toggle="search" className="nav-link nav-link-lg d-sm-none"><i
                        className="fas fa-search" /></a></li>
                </ul>
                <div className="search-element">
                  <input className="form-control" type="search" placeholder="Search" aria-label="Search"
                    data-width={250} />
                  <button className="btn" type="submit"><i className="fas fa-search" /></button>
                  <div className="search-backdrop" />
                  <div className="search-result">
                    <div className="search-header">
                      Histories
                    </div>
                    <div className="search-item">
                      <a href="#">How to hack NASA using CSS</a>
                      <a href="#" className="search-close"><i className="fas fa-times" /></a>
                    </div>
                    <div className="search-item">
                      <a href="#">Kodinger.com</a>
                      <a href="#" className="search-close"><i className="fas fa-times" /></a>
                    </div>
                    <div className="search-item">
                      <a href="#">#Stisla</a>
                      <a href="#" className="search-close"><i className="fas fa-times" /></a>
                    </div>
                    <div className="search-header">
                      Result
                    </div>
                    <div className="search-item">
                      <a href="#">
                        <img className="mr-3 rounded" width={30}
                          src="../../../static/assets/img/products/product-3-50.png" alt="product" />
                        oPhone S9 Limited Edition
                      </a>
                    </div>
                    <div className="search-item">
                      <a href="#">
                        <img className="mr-3 rounded" width={30}
                          src="../../../static/assets/img/products/product-2-50.png" alt="product" />
                        Drone X2 New Gen-7
                      </a>
                    </div>
                    <div className="search-item">
                      <a href="#">
                        <img className="mr-3 rounded" width={30}
                          src="../../../static/assets/img/products/product-1-50.png" alt="product" />
                        Headphone Blitz
                      </a>
                    </div>
                    <div className="search-header">
                      Projects
                    </div>
                    <div className="search-item">
                      <a href="#">
                        <div className="search-icon bg-danger text-white mr-3">
                          <i className="fas fa-code" />
                        </div>
                        Stisla Admin Template
                      </a>
                    </div>
                    <div className="search-item">
                      <a href="#">
                        <div className="search-icon bg-primary text-white mr-3">
                          <i className="fas fa-laptop" />
                        </div>
                        Create a new Homepage Design
                      </a>
                    </div>
                  </div>
                </div>
              </form>
              <ul className="navbar-nav navbar-right">
                <li className="dropdown dropdown-list-toggle"><a href="#" data-toggle="dropdown"
                    className="nav-link nav-link-lg message-toggle beep"><i className="far fa-envelope" /></a>
                  <div className="dropdown-menu dropdown-list dropdown-menu-right">
                    <div className="dropdown-header">Messages
                      <div className="float-right">
                        <a href="#">Mark All As Read</a>
                      </div>
                    </div>
                    <div className="dropdown-list-content dropdown-list-message">
                      <a href="#" className="dropdown-item dropdown-item-unread">
                        <div className="dropdown-item-avatar">
                          <img alt="image" src="../../../static/assets/img/avatar/avatar-1.png"
                            className="rounded-circle" />
                          <div className="is-online" />
                        </div>
                        <div className="dropdown-item-desc">
                          <b>Kusnaedi</b>
                          <p>Hello, Bro!</p>
                          <div className="time">10 Hours Ago</div>
                        </div>
                      </a>
                      <a href="#" className="dropdown-item dropdown-item-unread">
                        <div className="dropdown-item-avatar">
                          <img alt="image" src="../../../static/assets/img/avatar/avatar-2.png"
                            className="rounded-circle" />
                        </div>
                        <div className="dropdown-item-desc">
                          <b>Dedik Sugiharto</b>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                          <div className="time">12 Hours Ago</div>
                        </div>
                      </a>
                      <a href="#" className="dropdown-item dropdown-item-unread">
                        <div className="dropdown-item-avatar">
                          <img alt="image" src="../../../static/assets/img/avatar/avatar-3.png"
                            className="rounded-circle" />
                          <div className="is-online" />
                        </div>
                        <div className="dropdown-item-desc">
                          <b>Agung Ardiansyah</b>
                          <p>Sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                          <div className="time">12 Hours Ago</div>
                        </div>
                      </a>
                      <a href="#" className="dropdown-item">
                        <div className="dropdown-item-avatar">
                          <img alt="image" src="../../../static/assets/img/avatar/avatar-4.png"
                            className="rounded-circle" />
                        </div>
                        <div className="dropdown-item-desc">
                          <b>Ardian Rahardiansyah</b>
                          <p>Duis aute irure dolor in reprehenderit in voluptate velit ess</p>
                          <div className="time">16 Hours Ago</div>
                        </div>
                      </a>
                      <a href="#" className="dropdown-item">
                        <div className="dropdown-item-avatar">
                          <img alt="image" src="../../../static/assets/img/avatar/avatar-5.png"
                            className="rounded-circle" />
                        </div>
                        <div className="dropdown-item-desc">
                          <b>Alfa Zulkarnain</b>
                          <p>Exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                          <div className="time">Yesterday</div>
                        </div>
                      </a>
                    </div>
                    <div className="dropdown-footer text-center">
                      <a href="#">View All <i className="fas fa-chevron-right" /></a>
                    </div>
                  </div>
                </li>
                <li className="dropdown dropdown-list-toggle"><a href="#" data-toggle="dropdown"
                    className="nav-link notification-toggle nav-link-lg beep"><i className="far fa-bell" /></a>
                  <div className="dropdown-menu dropdown-list dropdown-menu-right">
                    <div className="dropdown-header">Notifications
                      <div className="float-right">
                        <a href="#">Mark All As Read</a>
                      </div>
                    </div>
                    <div className="dropdown-list-content dropdown-list-icons">
                      <a href="#" className="dropdown-item dropdown-item-unread">
                        <div className="dropdown-item-icon bg-primary text-white">
                          <i className="fas fa-code" />
                        </div>
                        <div className="dropdown-item-desc">
                          Template update is available now!
                          <div className="time text-primary">2 Min Ago</div>
                        </div>
                      </a>
                      <a href="#" className="dropdown-item">
                        <div className="dropdown-item-icon bg-info text-white">
                          <i className="far fa-user" />
                        </div>
                        <div className="dropdown-item-desc">
                          <b>You</b> and <b>Dedik Sugiharto</b> are now friends
                          <div className="time">10 Hours Ago</div>
                        </div>
                      </a>
                      <a href="#" className="dropdown-item">
                        <div className="dropdown-item-icon bg-success text-white">
                          <i className="fas fa-check" />
                        </div>
                        <div className="dropdown-item-desc">
                          <b>Kusnaedi</b> has moved task <b>Fix bug header</b> to <b>Done</b>
                          <div className="time">12 Hours Ago</div>
                        </div>
                      </a>
                      <a href="#" className="dropdown-item">
                        <div className="dropdown-item-icon bg-danger text-white">
                          <i className="fas fa-exclamation-triangle" />
                        </div>
                        <div className="dropdown-item-desc">
                          Low disk space. Let's clean it!
                          <div className="time">17 Hours Ago</div>
                        </div>
                      </a>
                      <a href="#" className="dropdown-item">
                        <div className="dropdown-item-icon bg-info text-white">
                          <i className="fas fa-bell" />
                        </div>
                        <div className="dropdown-item-desc">
                          Welcome to Stisla template!
                          <div className="time">Yesterday</div>
                        </div>
                      </a>
                    </div>
                    <div className="dropdown-footer text-center">
                      <a href="#">View All <i className="fas fa-chevron-right" /></a>
                    </div>
                  </div>
                </li>
                <li className="dropdown"><a href="#" data-toggle="dropdown"
                    className="nav-link dropdown-toggle nav-link-lg nav-link-user">
                    <img alt="image" src="../../../static/assets/img/avatar/avatar-1.png"
                      className="rounded-circle mr-1" />
                    <div className="d-sm-none d-lg-inline-block">Hi, Wahyu Fatur Rizki</div>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <div className="dropdown-title">Logged in 5 min ago</div>
                    <a href="features-profile.html" className="dropdown-item has-icon">
                      <i className="far fa-user" /> Profile
                    </a>
                    <a href="features-activities.html" className="dropdown-item has-icon">
                      <i className="fas fa-bolt" /> Activities
                    </a>
                    <a href="features-settings.html" className="dropdown-item has-icon">
                      <i className="fas fa-cog" /> Settings
                    </a>
                    <div className="dropdown-divider" />
                    <Link href="/index">
                    <a className="dropdown-item has-icon text-danger">
                      <i className="fas fa-sign-out-alt" /> Logout
                    </a>
                    </Link>
                  </div>
                </li>
              </ul>
            </nav>
  
            {/* Side Bar */}
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
                      <li>
                        <Link as="/dashboard/DashboardAdmin" href="/dashboard/"><a className="nav-link"
                          href="index-0.html">General Dashboard</a></Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-header">Pages</li>
                  <li className="dropdown">
                    <a href="#" className="nav-link has-dropdown"><i className="fas fa-bicycle" />
                      <span>Features</span></a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link as="/post/CreatePost" href="/post/"><a className="nav-link">Post Create</a></Link>
                      </li>
                      <li>
                        <Link as="/post/ListPost" href="/post/"><a className="nav-link">Posts</a></Link>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className="mt-4 mb-4 p-3 hide-sidebar-mini">
                  <a target="_blank" href="https://www.linkedin.com/in/wahyu-fatur-rizky/"
                    className="btn btn-primary btn-lg btn-block btn-icon-split">
                    <i className="fas fa-rocket" /> Profil {this.props.user.author}
                  </a>
                </div>
              </aside>
            </div>
        
            {/* Main Content */}
            <div className="main-content">
              <section className="section">
                <div className="section-header">
                  <div className="section-header-back">
                    <Link as="../ListPost" href="../"><a className="btn btn-icon"><i className="fas fa-arrow-left" /></a></Link>
                  </div>
                  <h1>Edit Post</h1>
                  <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                      <Link as="../../dashboard/DashboardAdmin" href="../../dashboard/"><a>Dashboard</a></Link>
                    </div>
                    <div className="breadcrumb-item">
                      <Link as="../ListPost" href="../"><a>Posts</a></Link>
                    </div>
                    <div className="breadcrumb-item">Edit Post</div>
                  </div>
                </div>
                <div className="section-body">
                  <h2 className="section-title">Hi, {this.props.user.author}!</h2>
                  <p className="section-lead">
                    Change information about yourself on this page.
                  </p>
                  <div className="row mt-sm-4">
                    <div className="col-12 col-md-12 col-lg-5">
                      <div className="card profile-widget">
                        <div className="profile-widget-header">
                          <img alt="image" src="../../../../../static/assets/img/avatar/avatar-1.png"
                            className="rounded-circle profile-widget-picture" />
                          <div className="profile-widget-items">
                            <div className="profile-widget-item">
                              <div className="profile-widget-item-label">Posts</div>
                              <div className="profile-widget-item-value">187</div>
                            </div>
                            <div className="profile-widget-item">
                              <div className="profile-widget-item-label">Followers</div>
                              <div className="profile-widget-item-value">6,8K</div>
                            </div>
                            <div className="profile-widget-item">
                              <div className="profile-widget-item-label">Following</div>
                              <div className="profile-widget-item-value">2,1K</div>
                            </div>
                          </div>
                        </div>
                        <div className="profile-widget-description">
                          <div className="profile-widget-name">{this.props.user.author} <div
                              className="text-muted d-inline font-weight-normal">
                              <div className="slash" /> Web Developer</div>
                          </div>
                          {this.props.user.author} is a superhero name in <b>Indonesia</b>, especially in my family. He is not a
                          fictional character but an original hero in my family, a hero for his children and for his wife. So,
                          I use the name as a user in this template.
                        </div>
                        <div className="card-footer text-center">
                          <div className="font-weight-bold mb-2">Follow {this.props.user.author} On</div>
                          <a href="https://www.linkedin.com/in/wahyu-fatur-rizky/" target="_blank"
                            className="btn btn-social-icon btn-facebook mr-1">
                            <i className="fab fa-facebook-f" />
                          </a>
                          <a href="https://www.linkedin.com/in/wahyu-fatur-rizky/" target="_blank"
                            className="btn btn-social-icon btn-twitter mr-1">
                            <i className="fab fa-twitter" />
                          </a>
                          <a href="https://www.linkedin.com/in/wahyu-fatur-rizky/" target="_blank"
                            className="btn btn-social-icon btn-github mr-1">
                            <i className="fab fa-github" />
                          </a>
                          <a href="https://www.linkedin.com/in/wahyu-fatur-rizky/" target="_blank"
                            className="btn btn-social-icon btn-instagram">
                            <i className="fab fa-instagram" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-7">
                      <div className="card">
                        <form onSubmit={this.handleSubmit} className="needs-validation" noValidate>
                          <div className="card-header">
                            <h4>Detail Post</h4>
                          </div>
                          <div className="card-body">
                            <div className="row">
                              <div className="form-group col-md-6 col-12">
                                <label>Title</label>
                                <input type="text" className="form-control" defaultValue={this.props.user.title} onChange={(event) => this.setState({title: event.target.value})} name="title" />
                                <div className="invalid-feedback">
                                  Please fill Title
                                </div>
                              </div>
                              <div className="form-group col-md-6 col-12">
                                <label>Category</label>
                                <select className="form-control" defaultValue={this.props.user.category_name} onChange={(event)=> this.setState({category_name: event.target.value})} name="category_name">
                                  <option>Choose Bellow</option>
                                  <option value="Tech">Tech</option>
                                  <option value="News">News</option>
                                  <option value="Political">Political</option>
                                  <option value="Web Developer">Web Developer</option>
                                  <option value="Mobile Developer">Mobile Developer</option>
                                </select>
                              </div>
                            </div>
                            <div className="row">
                              <div className="form-group col-md-7 col-12">
                                <label>Author</label>
                                <input type="text" className="form-control" defaultValue={this.props.user.author} onChange={(event) => this.setState({author: event.target.value})} name="author" />
                                <div className="invalid-feedback">
                                  Please fill author
                                </div>
                              </div>
                              <div className="form-group col-md-5 col-12">
                                <label>Status</label>
                                <select className="form-control" defaultValue={this.props.user.status_post} onChange={(event) => this.setState({status_post: event.target.value})} name="status_post">
                                  <option>Choose Below</option>
                                  <option value="Publish">Publish</option>
                                  <option value="Draft">Draft</option>
                                  <option value="Pending">Pending</option>
                                </select>
                              </div>
                            </div>
                            <div className="row">
                              <div className="form-group col-md-7 col-12">
                                <label>Date Create</label>
                                <input type="date" className="form-control" defaultValue={this.props.user.created_at} onChange={(event) => this.setState({created_at: event.target.value})} name="created_at" />
                                <div className="invalid-feedback">
                                  Please fill author
                                </div>
                              </div>
                              <div className="form-group col-md-5 col-12">
                                <label>Date Update</label>
                                <input type="date" className="form-control" defaultValue={this.props.user.update_at} onChange={(event) => this.setState({update_at: event.target.value})} name="update_at" />
                              </div>
                            </div>
                            <div className="row">
                              <div className="form-group col-12">
                                <label>Content Description Body</label>
                                <textarea className="form-control summernote-simple" defaultValue={this.props.user.body_post} onChange={(event) => this.setState({body_post: event.target.value})} name="body_post" />
                                </div>
                            </div>
                          </div>
                          <div className="card-footer text-right">
                            <Link as="/post/ListPost" href="/post/"><a className="btn btn-primary mr-2">Back</a></Link>
                            <button type="submit"className="btn btn-primary">Save Changes</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
  
            {/* Footer */}
            <footer className="main-footer">
              <div className="footer-left">
                Copyright © 2018
                <div className="bullet" />Modify Design By <a target="_blank"
                  href="https://www.linkedin.com/in/wahyu-fatur-rizky/">Wahyu Fatur Rizki</a>
              </div>
              <div className="footer-right">
              </div>
            </footer>
  
          </div>
        </div>
  
        {/* General JS Scripts */}
        <script src="../../../../../static/assets/modules/jquery.min.js"/>
        <script src="../../../../../static/assets/modules/popper.js"/>
        <script src="../../../../../static/assets/modules/tooltip.js"/>
        <script src="../../../../../static/assets/modules/bootstrap/js/bootstrap.min.js"/>
        <script src="../../../../../static/assets/modules/nicescroll/jquery.nicescroll.min.js"/>
        <script src="../../../../../static/assets/modules/moment.min.js"/>
        <script src="../../../../../static/assets/js/stisla.js"/>
    
        {/* JS Libraies */}
    
        {/* Page Specific JS File */}
    
        {/* Template JS File */}
        <script src="../../../../../static/assets/js/scripts.js"/>
        <script src="../../../../../static/assets/js/custom.js"/>
      </>
    )
  }
}

EditPost.getInitialProps = async ({ query: { id } }, res) => {
  const response = await fetch(`https://my-json-server.typicode.com/wahyufaturrizky/jepture-wahyu-front-end-/jsonusers/${id}`)
  const user = await response.json()

  return { user }
}

export default EditPost;