import React from 'react'

function Brand(props){
    return (
    <a href='https://crypt-oauth.web.app' className='d-flex align-items-center flex-wrap text-decoration-none'>
        <span className={(props.color === 'black')?'text-dark fl':'text-white fl'} >
            <span><b>C</b></span>
            <span>ry</span>
            <span><b>P</b></span>
            <span>t</span>
        </span>
        <span className={(props.color === 'black')?'text-muted fm':'text-white-50 fm'}> OAuth2.0 Service</span>
    </a>
    )
}

export default Brand