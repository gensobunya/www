import React from "react"
// import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import PostList from "./units/PostList"
import { RecentPostQuery } from "../../types/graphql-types"

const sportsPost: React.FC = () => {
  const data: RecentPostQuery = useStaticQuery(
    graphql`
      query RecentPost {
        allMarkdownRemark(
          sort: { fields: frontmatter___date, order: DESC }
          limit: 4
        ) {
          edges {
            node {
              frontmatter {
                date(formatString: "YYYY/MM/DD")
                title
                cover {
                  childImageSharp {
                    fluid {
                      src
                    }
                  }
                }
              }
              id
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )

  return <PostList edges={data.allMarkdownRemark.edges} color="white" />
}

export default sportsPost
