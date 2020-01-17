import React from 'react'
import Link from 'next/link';

const ListDataTable = (props) => {
  return (
    <tr>
      <td>
        <div className="custom-checkbox custom-control">
          <input type="checkbox" data-checkboxes="mygroup" className="custom-control-input" id="checkbox-2" />
          <label htmlFor="checkbox-2" className="custom-control-label">&nbsp;</label>
        </div>
      </td>
      <td>{props.title}
        <div className="table-links">
          <Link as="/post/ViewPost" href="/post/"><a>View</a></Link>
          <div className="bullet" />
          <Link as="/post/EditPost" href="/post/"><a href="#">Edit</a></Link>
          <div className="bullet" />
          <a href="#" className="text-danger">Trash</a>
        </div>
      </td>
      <td>
        <a href="#">{props.category}</a>
      </td>
      <td>
        <a href="#">
          <img alt="image" src="../../static/assets/img/avatar/avatar-5.png" className="rounded-circle" width={35}
            data-toggle="title" title />
          <div className="d-inline-block ml-1">{props.author}</div>
        </a>
      </td>
      <td>{props.create}</td>
      <td>{props.update}</td>
      <td>
        <div className="badge badge-primary">Published</div>
      </td>
    </tr>
  )
}

export default ListDataTable;