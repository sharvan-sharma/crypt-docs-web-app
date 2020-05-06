import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Divider from '@material-ui/core/Divider';
import Brand from './Brand'
import Listitem from './listitem'


function Docsdrawer(){
  const list = useStaticQuery(graphql`
                    query {
                        allMarkdownRemark(sort: {order: ASC, fields: frontmatter___page}) {
                        edges {
                        node {
                            id
                            frontmatter {
                            title
                            page
                            }
                            fields {
                            slug
                            }
                        }
                        }
                    }
                    }`)

    return (<div >
              <div className='p-3'>
                <Brand color='black' />
              </div>
              <Divider />
              <div>
                {list.allMarkdownRemark.edges.map((edge) => <Listitem key={edge.node.id} title={edge.node.frontmatter.title} slug={edge.node.fields.slug} />)}
              </div>
            </div>
  );
        }

export default Docsdrawer