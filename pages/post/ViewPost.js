import React, { Component } from 'react'
import LayoutDashboard from '../../components/LayoutDashboard'
import Link from 'next/link'
import axios from 'axios' 

class ViewPost extends Component {
  render () {
    return (
      <LayoutDashboard title="View Post">
        {/* Main Content */}
        <div className="main-content">
        <section className="section">
          <div className="section-header">
            <div className="section-header-back">
              <Link href="./Post"><a className="btn btn-icon"><i className="fas fa-arrow-left" /></a></Link>
            </div>
            <h1>Detail Post</h1>
            <div className="section-header-breadcrumb">
              <div className="breadcrumb-item active"><Link href="../dashboard/DashboardAdmin"><a>Dashboard</a></Link></div>
              <div className="breadcrumb-item">Detail Post</div>
            </div>
          </div>
          <div className="section-body">
            <h2 className="section-title">Hi, Wahyu Fatur Rizki!</h2>
            <p className="section-lead">
              Change information about yourself on this page.
            </p>
            <div className="row mt-sm-4">
              <div className="col-12 col-md-12 col-lg-5">
                <div className="card profile-widget">
                  <div className="profile-widget-header">                     
                    <img alt="image" src="../static/assets/img/avatar/avatar-1.png" className="rounded-circle profile-widget-picture" />
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
                    <div className="profile-widget-name">Wahyu Fatur Rizki <div className="text-muted d-inline font-weight-normal"><div className="slash" /> Web Developer</div></div>
                    Wahyu Fatur Rizki is a superhero name in <b>Indonesia</b>, especially in my family. He is not a fictional character but an original hero in my family, a hero for his children and for his wife. So, I use the name as a user in this template.
                  </div>
                  <div className="card-footer text-center">
                    <div className="font-weight-bold mb-2">Follow Wahyu Fatur Rizki On</div>
                    <a href="https://www.linkedin.com/in/wahyu-fatur-rizky/" target="_blank" className="btn btn-social-icon btn-facebook mr-1">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="https://www.linkedin.com/in/wahyu-fatur-rizky/" target="_blank" className="btn btn-social-icon btn-twitter mr-1">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="https://www.linkedin.com/in/wahyu-fatur-rizky/" target="_blank" className="btn btn-social-icon btn-github mr-1">
                      <i className="fab fa-github" />
                    </a>
                    <a href="https://www.linkedin.com/in/wahyu-fatur-rizky/" target="_blank" className="btn btn-social-icon btn-instagram">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-7">
                <div className="card">
                  <form method="post" className="needs-validation" noValidate>
                    <div className="card-header">
                      <h4>Detail Post</h4>
                    </div>
                    <div className="card-body">
                      <div className="row">                               
                        <div className="form-group col-md-6 col-12">
                          <label>Title</label>
                          <p>Laravel 5 Tutorial: Introduction</p>
                        </div>
                        <div className="form-group col-md-6 col-12">
                          <label>Category</label>
                          <p>Web Developer</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-6 col-12">
                          <label>Author</label>
                          <p>Wahyu Fatur Rizki</p>
                        </div>
                        <div className="form-group col-md-6 col-12">
                          <label>Status</label>
                          <p>Published</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-6 col-12">
                          <label>Date Create</label>
                          <p>2019-01-20</p>
                        </div>
                        <div className="form-group col-md-6 col-12">
                          <label>Date Update</label>
                          <p>2019-01-20</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-12">
                          <label>Content Description Body</label>
                          <p>Laravel 5 Description</p>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer text-right">
                      <Link href="/post/Post"><a className="btn btn-primary mr-2">Back</a></Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      </LayoutDashboard>
    )
  }
}

export default ViewPost;