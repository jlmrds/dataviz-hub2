import React from 'react'
import PropTypes from "prop-types"
import { Link } from "gatsby"
import kebabCase from "lodash.kebabcase"
import no_image_1 from "../images/blog/no_image_1.png"
import no_image_2 from "../images/blog/no_image_2.png"
import no_image_3 from "../images/blog/no_image_3.png"
import no_image_4 from "../images/blog/no_image_4.png"
import no_image_5 from "../images/blog/no_image_5.png"
import Slide from 'react-reveal/Slide'
import {ArrowBox, IMG} from "../components_style/styled"

const blogPostGrid = ({allMdx}) => {
  
  return(
    <div className="flex flex-wrap w-full">
    {allMdx.edges.map(({ node }) => {
      let imagesrc 
      
      if(node.frontmatter && node.frontmatter.thumbnail && node.frontmatter.thumbnail.childImageSharp) {
        imagesrc = node.frontmatter.thumbnail.childImageSharp.fluid.src 
      } else {
        let image_set = [no_image_1, no_image_2, no_image_3, no_image_4, no_image_5]
        imagesrc = image_set[Math.floor(Math.random() * image_set.length)]
      }
      
      let description = node.frontmatter.description.split(" ").splice(0, 30)
      if(description.length < 30){
        description = description.join(" ");
      } else {
        description = description.join(" ").concat(" ...");
      }

      return (
        <Slide bottom key={node.id} duration={400} fraction={0.4}>
          <div className="w-full sm:w-1/2 lg:w-1/3 min-h-100 max-h-100 pb-24 overflow-hidden bg-white" style={{fontFamily: "TUoS  Blake"}}>
            <Link className="group" to={node.fields.slug}>
              <IMG className="w-full ipadp:greyScale-100 group-hover:greyScale-0 min-h-3/5 max-h-3/5" style={{transition: ".5s ease", backgroundImage: `url(${imagesrc})`}}  />
              <ArrowBox className="px-8 py-6 leading-none text-gray-500 pb-60">
                <h1 className="font-bold text-2xl leading-tight text-gray-900 group-hover:text-highlight_2 overflow-y-hidden" style={{minHeight: "0vh", maxHeight: "10vh", fontFamily: "TUoS Stephenson"}}>{node.frontmatter.title}</h1>
                <p className="my-2 text-sm leading-tight group-hover:text-highlight_2" >{description}</p>
                <p className=" my-2 text-xs pt-2" >{node.frontmatter.date}</p>
                <p className="my-2 text-xs">
                  {node.frontmatter.author.map((author, idx) => (
                    (node.frontmatter.author.length == idx + 1) ? author.name : author.name + " · "      
                  ))}
                </p>
                <p className="mt-5 text-base group-hover:text-highlight_2 font-semibold">{node.fields.readingTime.text}</p>
                <div className="py-2 text-sm">
                  {node.frontmatter.category.map((cat) => (
                    <Link key={cat} to={`/blog/category/${kebabCase(cat)}`} 
                      className="inline-block hover:bg-highlight_2 hover:text-white py-1 px-2 mt-2 mr-2 bg-gray-800 text-gray-100">{cat}
                    </Link>
                  ))}
                  {node.frontmatter.tag.map((tag) => (
                    <Link key={tag} to={`/blog/tag/${kebabCase(tag)}`} 
                      className="inline-block hover:bg-highlight_2 hover:text-white py-1 px-2 mt-2 mr-2 bg-white text-gray-700 border-1 border-gray-300">{tag}
                    </Link>
                  ))}
                </div>
              </ArrowBox
>
            </Link>
          </div>
        </Slide>
      )
    })}
    </div>
  )
}

export default blogPostGrid

blogPostGrid.propTypes = {
  allMdx: PropTypes.any,

}