import React from 'react'
import {graphql} from'gatsby'
import Layout from '../components/layout.js'
import SEO from '../components/seo.js' 

export default ({data}) =>{
    const page = data.markdownRemark;
    return (
        <Layout>
            <SEO title={page.frontmatter.title}/>
            <div>
                <div dangerouslySetInnerHTML={{ __html:page.html }} />
            </div>
        </Layout>
    )
}

export const query = graphql`
query($slug:String!){
    markdownRemark(fields:{slug:{eq:$slug}}){
        html
        frontmatter {
            title
        }
    }
}
`
