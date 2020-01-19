import React from 'react'
import Link from 'next/link'

const ListDataTable = (props) => {
  return (
    <tr key={props.data.id}>
      <td>
        <div className="custom-checkbox custom-control">
          <input type="checkbox" data-checkboxes="mygroup" className="custom-control-input" id="checkbox-2" />
          <label htmlFor="checkbox-2" className="custom-control-label">&nbsp;</label>
        </div>
      </td>
      <td>{props.data.title}
        <div className="table-links">
          <Link href="/post/ViewPost/[id]" href="/post/ViewPost/" as={`/post/ViewPost/${props.data.id}`}><button className="btn btn-success">View</button></Link>
          <div className="bullet" />
          <Link as="/post/EditPost/[id]" href="/post/EditPost/" as={`/post/EditPost/${props.data.id}`}><button className="btn btn-info">Edit</button></Link>
          <div className="bullet" />
          <button className="btn btn-danger" onClick={()=> props.handleDelete(props.data.id)}>Trash</button>
        </div>
      </td>
      <td>
        <a href="#">{props.data.category_name}</a>
      </td>
      <td>
        <a href="#">
          <img alt="image" src="../../static/assets/img/avatar/avatar-5.png" className="rounded-circle" width={35}
            data-toggle="title" title />
          <div className="d-inline-block ml-1">{props.data.author}</div>
        </a>
      </td>
      <td>{props.data.created_at}</td>
      <td>{props.data.update_at}</td>
      <td>
        <div className="badge badge-primary">{props.data.status_post}</div>
      </td>
    </tr>
  )
}

export default ListDataTable;