import React, { Component } from 'react'
import LayoutDashboard from '../../components/LayoutDashboard'
import Link from 'next/link'
import axios from 'axios' 


class CreatePost extends Component {

  state = {
    title: '',
    author: '',
    category_name: '',
    body_post: '',
    status_post: '',
    created_at: '',
    update_at: ''
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

    axios.post('http://localhost:3004/jsonusers',posts)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
  
  render () {
    return (
      <LayoutDashboard title="Create Post">
        {/* Main Content */}
        <div className="main-content">
          <section className="section">
            <div className="section-header">
              <div className="section-header-back">
                <Link as="./ListPost" href="./"><a className="btn btn-icon"><i className="fas fa-arrow-left" /></a></Link>
              </div>
              <h1>Create New Post</h1>
              <div className="section-header-breadcrumb">
                <div className="breadcrumb-item active"><Link as="../dashboard/DashboardAdmin" href="../dashboard/  "><a>Dashboard</a></Link></div>
                <div className="breadcrumb-item"><Link as="./ListPost" href="./"><a>Posts</a></Link></div>
                <div className="breadcrumb-item">Create New Post</div>
              </div>
            </div>
            <div className="section-body">
              <h2 className="section-title">Create New Post</h2>
              <p className="section-lead">
                On this page you can create a new post and fill in all fields.
              </p>
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4>Write Your Post</h4>
                    </div>
                    <div className="card-body">
                      <form onSubmit={this.handleSubmit}>
                        <div className="form-group row mb-4">
                          <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">Title</label>
                          <div className="col-sm-12 col-md-7">
                            <input type="text" className="form-control" onChange={(event) => this.setState({title: event.target.value})} name="title" />
                          </div>
                        </div>
                        <div className="form-group row mb-4">
                          <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">Author</label>
                          <div className="col-sm-12 col-md-7">
                            <input type="text" className="form-control" onChange={(event) => this.setState({author: event.target.value})} name="author" />
                          </div>
                        </div>
                        <div className="form-group row mb-4">
                          <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">Category</label>
                          <div className="col-sm-12 col-md-7">
                            <select className="form-control" onChange={(event) => this.setState({category_name: event.target.value})} name="category_name">
                              <option>Choose Bellow</option>
                              <option value="Tech">Tech</option>
                              <option value="News">News</option>
                              <option value="Political">Political</option>
                              <option value="Web Developer">Web Developer</option>
                              <option value="Mobile Developer">Mobile Developer</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group row mb-4">
                          <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">Content</label>
                          <div className="col-sm-12 col-md-7">
                            <textarea type="text" className="form-control" onChange={(event) => this.setState({body_post: event.target.value})} name="body_post" />
                          </div>
                        </div>
                        <div className="form-group row mb-4">
                          <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">Status</label>
                          <div className="col-sm-12 col-md-7">
                            <select className="form-control" onChange={(event) => this.setState({status_post: event.target.value})} name="status_post">
                              <option>Choose Below</option>
                              <option value="Publish">Publish</option>
                              <option value="Draft">Draft</option>
                              <option value="Pending">Pending</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group row mb-4">
                          <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">Create Date</label>
                          <div className="col-sm-12 col-md-7">
                            <input type="date" className="form-control datemask" placeholder="YYYY/MM/DD" onChange={(event) => this.setState({created_at: event.target.value})} name="created_at" />
                          </div>
                        </div>
                        <div className="form-group row mb-4">
                          <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">Update Date</label>
                          <div className="col-sm-12 col-md-7">
                            <input type="date" className="form-control datemask" placeholder="YYYY/MM/DD" onChange={(event) => this.setState({update_at: event.target.value})} name="update_at" />
                          </div>
                        </div>
                        <div className="form-group row mb-4">
                          <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3" />
                          <div className="col-sm-12 col-md-7">
                            <button type="submit" className="btn btn-primary">Create Post</button>
                          </div>
                        </div>
                      </form>
                    </div>
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

export default CreatePost;