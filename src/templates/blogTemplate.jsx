import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import PropTypes from "prop-types"
import SEO from "../components/seo"
import BackgroundSection from "../components_images/blog_background";
import no_image_thumbnail from "../images/no_image.png"

function blogTemplate({ data: {allMdx}, pageContext }) {

	return (
		<Layout>
			<SEO 
					title="Blog" 
					keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research"]} 
			/>
			<BackgroundSection className="flex flex-wrap justify-center self-center content-center items-center m-auto">
				<div className="text-white text-center">
					<h1 className="text-6xl">Blog <br /></h1>
					<p className="text-sm">scientia potentia est.</p>
					
				</div>
			</BackgroundSection>

			<div className="flex flex-wrap-reverse">
				<div className="sm:w-3/4 px-10 py-8">

					{allMdx.edges.map(({ node }) => {
						let imagesrc
						
						if(node.frontmatter && node. frontmatter.thumbnail && node.frontmatter.thumbnail.childImageSharp) {
							imagesrc = node.frontmatter.thumbnail.childImageSharp.fluid.src 
						} else {
							imagesrc = no_image_thumbnail
						}

						return (
							<div key={node.id}>
								<img src={imagesrc}></img>
								<Link to={node.fields.slug}>
									<h1>{node.frontmatter.title}</h1>
								</Link>
								<p>{node.frontmatter.date}</p>
								<p>By {node.frontmatter.author}</p>
								<p>Category: {node.frontmatter.category.join(', ')}</p>
								<Link to={node.fields.slug}>View Article</Link>
                <hr />
							</div>
						)
					})}

					<ul>
						{Array.from({ length: pageContext.numPages }).map((item, i) => {
							const index = i + 1
							const link = index === 1 ? '/blog' : `/blog/page/${index}`

							return (
								<li key={index}>
									{pageContext.currentPage === index ? (
										<span>{index}</span>
									) : (
										<a href={link}>{index}</a>
									)}
								</li>
							)
						})}
					</ul>
				</div>

				{/* TODO: Add category & tags */}
        <div className="w-full sm:w-1/4 px-10 py-8 bg-gray-300">

        </div>
				
			</div>

		</Layout>
	)
}

export default blogTemplate

blogTemplate.propTypes = {
		pageContext: PropTypes.any,
		data: PropTypes.any
	}

	export const query = graphql`
	query blogList($skip: Int!, $limit: Int!) {
		allMdx(
			sort: { fields: [frontmatter___date], order: DESC }
			limit: $limit
			skip: $skip
		) {
			edges {
				node {
					id
					fields {
						slug
						readingTime {
								minutes
						}
					}
					frontmatter {
						title
						date(formatString: "dddd Do MMMM YYYY")
						author
						category
						tag
						thumbnail {
							childImageSharp {
								fluid {
									src
								}
							}
						}
					}
				}
			}
		}
	}
`