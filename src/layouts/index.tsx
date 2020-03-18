import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import { Grid } from "@material-ui/core"
import { ThemeProvider, StylesProvider } from "@material-ui/styles"

import Sidebar from "../components/Sidebar"
import theme from "./theme"

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
}

const IndexLayout: React.FC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              {
                name: "description",
                content: data.site.siteMetadata.description,
              },
              { name: "keywords", content: data.site.siteMetadata.keywords },
            ]}
          >
            <script
              type="text/javascript"
              src="https://cdn.iframe.ly/embed.js"
            />
          </Helmet>
          <Grid container spacing={0}>
            <Grid item sm={4} xs="auto">
              <Sidebar title={data.site.siteMetadata.title} />
            </Grid>
            <Grid item sm={8} xs={12}>
              {children}
            </Grid>
          </Grid>
        </ThemeProvider>
      </StylesProvider>
    )}
  />
)

export default IndexLayout
