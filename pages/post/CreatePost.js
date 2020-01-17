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
    created_at: ''
  }

  postDataHandler = () => {
    const post = {
      title: this.state.title,
      author: this.state.author,
      category_name: this.state.category_name,
      body_post: this.state.body_post,
      status_post: this.state.status_post,
      created_at: this.state.created_at

    };
    axios.post('https://my-json-server.typicode.com/wahyufaturrizky/dbwahyu/posts', post)
    .then(response => {
      console.log(response);
    });

  }
  render () {
    return (
      <LayoutDashboard title="Create Post">
        {/* Main Content */}
        <div className="main-content">
          <section className="section">
            <div className="section-header">
              <div className="section-header-back">
                <Link as="./Post" href="./"><a className="btn btn-icon"><i className="fas fa-arrow-left" /></a></Link>
              </div>
              <h1>Create New Post</h1>
              <div className="section-header-breadcrumb">
                <div className="breadcrumb-item active"><Link as="../dashboard/DashboardAdmin" href="../dashboard/  "><a>Dashboard</a></Link></div>
                <div className="breadcrumb-item"><Link as="./Post" href="./"><a>Posts</a></Link></div>
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
                      <div className="form-group row mb-4">
                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">Title</label>
                        <div className="col-sm-12 col-md-7">
                          <input type="text" className="form-control" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                        </div>
                      </div>
                      <div className="form-group row mb-4">
                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">Author</label>
                        <div className="col-sm-12 col-md-7">
                          <input type="text" className="form-control" value={this.state.author} onChange={(event) => this.setState({author: event.target.value})} />
                        </div>
                      </div>
                      <div className="form-group row mb-4">
                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">Category</label>
                        <div className="col-sm-12 col-md-7">
                          <select value={this.state.category_name} onChange={(event) => this.setState({category_name: event.target.value})} className="form-control selectric">
                            <option value="Tech">Tech</option>
                            <option value="News">News</option>
                            <option value="Political">Political</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group row mb-4">
                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">Content</label>
                        <div className="col-sm-12 col-md-7">
                          <textarea className="summernote-simple" value={this.state.body_post} onChange={(event) => this.setState({body_post: event.target.value})} />
                          </div>
                      </div>
                      <div className="form-group row mb-4">
                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">Status</label>
                        <div className="col-sm-12 col-md-7">
                          <select value={this.state.status_post} onChange={(event) => this.setState({status_post: event.target.value})} className="form-control selectric">
                            <option value="Publish">Publish</option>
                            <option value="Draft">Draft</option>
                            <option value="Pending">Pending</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group row mb-4">
                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">Create Date</label>
                        <div className="col-sm-12 col-md-7">
                          <input type="date" className="form-control datemask" placeholder="YYYY/MM/DD" value={this.state.created_at} onChange={(event) => this.setState({created_at: event.target.value})} />
                        </div>
                      </div>
                      <div className="form-group row mb-4">
                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3" />
                        <div className="col-sm-12 col-md-7">
                          <button onClick={this.postDataHandler} className="btn btn-primary">Create Post</button>
                        </div>
                      </div>
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