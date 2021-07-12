import React, { useState, useEffect } from 'react'
import PropTypes from "prop-types"
import { trackScrollPosition } from "../../utils/hooks/trackScrollPosition"
import { VisTagMenuBtn, VisFooterBtn } from "../style/visStyle"
import { FaTags } from "react-icons/fa"
import { MdCancel } from "react-icons/md"
import { ImMenu3, ImMenu4 } from "react-icons/im"
import {FiSearch} from "react-icons/fi"
import Footer from "../shared/footer"
import WordCloud from "./wordCloud"

const visTags = ({ tagMenu, handleTagMenu, tags }) => {
  const [searchValue, setSearchValue] = useState("");
  const [filterTag, setfilterTag] = useState(tags);
  const [footer, setFooter] = useState(false);
  const footerIconStyle = "text-white text-2xl transform group-hover:scale-110 transition duration-500"

  trackScrollPosition("vis-tag-button");
  trackScrollPosition("vis-footer-button");

  function searchTag() {
    let searchWord = searchValue.toLowerCase();
    let searchTagList = tags.filter((tag) => {
      return tag.name.toLowerCase().indexOf(searchWord) != -1; // returns true or false
    });
    setfilterTag(searchTagList);
  }

  // Only search tags if the user stop typing
  useEffect(() => {
    const timeoutTyping = setTimeout(() => searchTag(), 1000);
    return () => {
      clearTimeout(timeoutTyping);
    }
  }, [searchValue])

  return (
    <div className="relative">
      <VisTagMenuBtn onClick={() => handleTagMenu()} tabindex="100" id="vis-tag-button" className="shadow-2xl flex justify-center items-center group" title="Tag Menu">
        <FaTags className="text-white text-xl transform group-hover:scale-125 transition duration-500" />
      </VisTagMenuBtn>

      <VisFooterBtn onClick={() => setFooter(!footer)} tabindex="101" id="vis-footer-button" className={`shadow-2xl flex justify-center items-center group ${footer ? 'bg-brand-blue' : 'bg-gray-800'}`} title="Footer">
        {!footer && <ImMenu4 className={footerIconStyle} />}
        {footer && <ImMenu3 className={footerIconStyle} />}
      </VisFooterBtn>
 
      <div className={`${tagMenu ? 'block' : 'translate-x-full'} bg-gray-900 transform duration-500 transition fixed h-full w-full flex flex-wrap justify-center items-center`} style={{zIndex: '1000'}}>
        <button onClick={() => handleTagMenu()} className="text-brand-blue bg-black rounded-md transition duration-300 text-lg px-3 py-1 absolute top-0 right-0 m-10 flex items-center">
          <MdCancel className="text-xl mr-1" /> Close
        </button>
        <div className="w-full justify-center flex my-10">
          <div className="inline-block focus:outline-none text-gray-600 bg-white shadow px-2 rounded-lg ml-2">
            <FiSearch className="inline-block text-center text-xl -mt-2" />
              <input 
                id="tagSearch" onChange={(e) => setSearchValue(e.target.value)} value={searchValue} 
                className="py-1 pl-2 text-base focus:outline-none pr-3 text-gray-600" 
                style={{maxWidth: "40vw"}} type="text" name="search"  placeholder="Search for tags" 
              />
          </div>
        </div>
        <div className="w-full text-center">{filterTag.length == 0 && <h1 className="text-gray-300">No results.</h1>}</div>
        <WordCloud   
          width="100%"
          height="100%"       
          words={filterTag}
          menu="Tag menu"
          minFontSize={0.97}
          maxFontSize={2.8}
        />
      </div>
      
      <Footer className={`${footer ? 'fixed bottom-0' : 'hidden' }`} />
    </div>
  )
}

export default visTags

visTags.propTypes = {
  className: PropTypes.any,
}