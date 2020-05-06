import React from 'react'
import {graphql,Link} from'gatsby'
import Layout from '../components/layout.js'
import SEO from '../components/seo.js' 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRight,faArrowLeft} from '@fortawesome/free-solid-svg-icons'

export default ({data}) =>{
    const page = data.markdownRemark;
    return (
        <Layout>
            <SEO title={page.frontmatter.title}/>
       
            <div>
                <div dangerouslySetInnerHTML={{ __html:page.html }} />
            </div>
            <div className='d-flex justify-content-between py-3'>
                {(page.frontmatter.prevpage !== null)?
                <Link to={page.frontmatter.prevpage}  className='text-decoration-none forback p-1' style={{color:'inherit'}} >
                    <FontAwesomeIcon icon={faArrowLeft} /> Prev Page
                </Link>:
                <span className='text-decoration-none forback p-1 text-muted' >
                    <FontAwesomeIcon icon={faArrowLeft} /> Prev Page
                </span>
                }
                {(page.frontmatter.nextpage !== null)?
                <Link to={page.frontmatter.nextpage} className='text-decoration-none forback p-1' style={{color:'inherit'}}>
                    Next Page <FontAwesomeIcon icon={faArrowRight} />
                </Link>:
                <span className='text-decoration-none forback p-1 text-muted' >
                    <FontAwesomeIcon icon={faArrowLeft} /> Next Page
                </span>}
            </div>
        </Layout>
    )
}

export const query = graphql`
query($slug:String!){
    markdownRemark(fields:{slug:{eq:$slug}}){
        html
        frontmatter {
            nextpage
            prevpage
            title
        }
    }
}
`
