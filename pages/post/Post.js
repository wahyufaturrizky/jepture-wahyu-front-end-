import React, { Component } from 'react'
import LayoutDashboard from '../../components/LayoutDashboard'
import Link from 'next/link';
import axios from 'axios'
import ListDataTable from '../../components/ListDataTable'

class Post extends Component {

  state = {
    posts: []
  }

  componentDidMount () {``
    axios.get('https://jepture-wahyu-front-end.wahyufaturrizkyy.now.sh/jsonusers').then(response => {
      this.setState({posts: response.data});
      console.log(response);
    });
  }
  render() {

    const posts = this.state.posts.map(post => {
      return <ListDataTable 
              key={post.id} 
              title={post.title} 
              category={post.category_name} 
              author={post.author} 
              create={post.created_at} 
              update={post.update_at}
            />
    });
    return (
      <LayoutDashboard title="Post">
        {/* Main Content */}
        <div className="main-content">
          <section className="section">
            <div className="section-header">
              <div className="section-header-back">
                <Link as="../dashboard/DashboardAdmin" href="../dashboard/"><a className="btn btn-icon"><i className="fas fa-arrow-left" /></a></Link>
              </div>
              <h1>Posts</h1>
              <div className="section-header-button">
                <Link as="./CreatePost" href="./"><a className="btn btn-primary">Add New</a></Link>
              </div>
              <div className="section-header-breadcrumb">
                <div className="breadcrumb-item active"><Link as="../dashboard/DashboardAdmin" href="../dashboard/"><a>Dashboard</a></Link></div>
                <div className="breadcrumb-item"><Link as="/post/Post" href="/post/"><a>Posts</a></Link></div>
                <div className="breadcrumb-item">All Posts</div>
              </div>
            </div>
            <div className="section-body">
              <h2 className="section-title">Posts</h2>
              <p className="section-lead">
                You can manage all posts, such as editing, deleting and more.
              </p>
              <div className="row">
                <div className="col-12">
                  <div className="card mb-0">
                    <div className="card-body">
                      <ul className="nav nav-pills">
                        <li className="nav-item">
                          <a className="nav-link active" href="#">All <span className="badge badge-white">5</span></a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Draft <span className="badge badge-primary">1</span></a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Pending <span className="badge badge-primary">1</span></a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Trash <span className="badge badge-primary">0</span></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4>All Posts</h4>
                    </div>
                    <div className="card-body">
                      <div className="float-left">
                        <select className="form-control selectric">
                          <option>Action For Selected</option>
                          <option>Move to Draft</option>
                          <option>Move to Pending</option>
                          <option>Delete Pemanently</option>
                        </select>
                      </div>
                      <div className="float-right">
                        <form>
                          <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search" />
                            <div className="input-group-append">
                              <button className="btn btn-primary"><i className="fas fa-search" /></button>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="clearfix mb-3" />
                      <div className="table-responsive">
                        <table className="table table-striped">
                          <tbody>
                            <tr>
                              <th className="text-center pt-2">
                                <div className="custom-checkbox custom-checkbox-table custom-control">
                                  <input type="checkbox" data-checkboxes="mygroup" data-checkbox-role="dad"
                                    className="custom-control-input" id="checkbox-all" />
                                  <label htmlFor="checkbox-all" className="custom-control-label">&nbsp;</label>
                                </div>
                              </th>
                              <th>Title</th>
                              <th>Category</th>
                              <th>Author</th>
                              <th>Created At</th>
                              <th>Update At</th>
                              <th>Status</th>
                            </tr>
                            {posts}
                          </tbody>
                        </table>
                      </div>
                      <div className="float-right">
                        <nav>
                          <ul className="pagination">
                            <li className="page-item disabled">
                              <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">«</span>
                                <span className="sr-only">Previous</span>
                              </a>
                            </li>
                            <li className="page-item active">
                              <a className="page-link" href="#">1</a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">2</a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">3</a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">»</span>
                                <span className="sr-only">Next</span>
                              </a>
                            </li>
                          </ul>
                        </nav>
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

export default Post;