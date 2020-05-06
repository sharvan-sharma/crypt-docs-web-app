import React from 'react'
import {Link} from 'gatsby'

function Listitem(props){

    return (
        <div className='d-flex align-items-center listitem px-3 py-1 my-2'>
            <Link className='text-dark text-decoration-none' to={props.slug}>{props.title}</Link>
        </div>
    )
}

export default Listitem