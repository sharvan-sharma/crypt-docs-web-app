const {createFilePath} =require(`gatsby-source-filesystem`)
const path = require('path')

exports.onCreateNode = ({node,getNode,actions})=>{
    const {createNodeField} = actions
    if(node.internal.type === `MarkdownRemark`){
        const slug = createFilePath({ node,getNode })
        createNodeField({
            node,
            name:'slug',
            value:slug
        })
    }
}

exports.createPages = ({graphql,actions})=>{
    const {createPage} = actions
    return graphql(`
    query {
        allMarkdownRemark {
            edges {
            node {
                id
                fields {
                slug
                }
            }
            }
        }
        }
    `).then(result=>{
        result.data.allMarkdownRemark.edges.forEach(({node})=>{
            createPage({
                path:node.fields.slug,
                component: path.resolve(`./src/templates/display.js`),
                context: {
                    slug: node.fields.slug
                }
            })
        })
    })
}


/* Allow us to use something like: import { X } from 'directory' instead of '../../folder/directory' */
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, '../src'), 'node_modules'],
    },
  });
};