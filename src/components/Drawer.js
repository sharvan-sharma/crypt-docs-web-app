import React from 'react'
import { useStaticQuery, graphql ,Link } from "gatsby"
import Divider from '@material-ui/core/Divider';
import Brand from './Brand'


function Docsdrawer(){
  const list = useStaticQuery(graphql`
                    query {
                        allMarkdownRemark {
                        edges {
                        node {
                            id
                            frontmatter {
                            title
                            }
                            fields {
                            slug
                            }
                        }
                        }
                    }
                    }`)
    const array = list.allMarkdownRemark.edges.sort((a,b)=>a.node.frontmatter.page-b.node.frontmatter.page)

    return (<div >
              <div className='p-3'>
                <Brand/>
              </div>
              <Divider />
              <div className='p-3'>
                {array.map((edge) => (
                  <div className='d-flex align-items-center py-2' key={edge.node.id}>
                    <Link className='my-auto text-decoration-none bold' style={{color:'inherit'}}  to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
                  </div>
                ))}
              </div>
            </div>
  );
        }

export default Docsdrawer