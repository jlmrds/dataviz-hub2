import React from 'react'
import { Link, navigate } from "gatsby"
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import { MdKeyboardArrowRight, MdPeople } from "react-icons/md"
import { RiCalendarEventLine, RiBookReadLine, RiMenuAddLine } from "react-icons/ri"

const HomeCommunity = () => {
  
  return (
    <div id="home_community" className="ipadp:min-h-100 flex flex-wrap justify-center items-center py-10">
      <Fade>
        <div className="container mx-auto justify-center flex flex-wrap">
          <div className="text-6xl font-semibold text-highlight_2 text-box w-full text-center" style={{fontFamily: "TUoS Stephenson"}}>Your community.</div>
          <Link to="/community" className="text-box mt-5 text-gray-500 hover:underline">Learn more <MdKeyboardArrowRight className="inline-block" /></Link>
          {/* <p className="border-t-6 border-highlight_2 w-1/12 text-box"></p> */}
        </div>
      </Fade>
      <div className="flex flex-wrap text-gray-800 pt-10 pb-20 justify-center">
        <Zoom bottom duration={700} delay={500}>
          <div className="md:w-1/3 ipadp:w-1/5 mx-5 p-3 2xl:p-12 mt-10">
            <RiCalendarEventLine className="text-5xl" />
            <p className="text-xl font-bold py-3">Events</p>
            <div className="border-t-4 border-gray-700 py-3 text-gray-600">
              Discover a variety of events including talks and symposia, workshops, vis-coding clubs and data visualisation hackathons!
            </div>
            <button onClick={() => navigate('/events')} className="mt-8 2xl:mt-12 bg-gray-800 hover:bg-highlight_2 text-center hover:text-white text-gray-100 font-semibold py-2 px-6 border-2 border-transparent shadow">
              <Link to="/events" className="hover:text-white">Upcoming events <MdKeyboardArrowRight className="inline-block" /></Link>
            </button>
          </div>
        </Zoom>
        <Zoom bottom duration={700} delay={750}>
          <div className="md:w-1/3 ipadp:w-1/5 mx-5 p-3 2xl:p-12 mt-10">
            <RiBookReadLine className="text-5xl" />
            <p className="text-xl font-bold py-3">Training</p>
            <div className="border-t-4 border-gray-700 py-3 text-gray-600">
              Discover different training courses organised by the dedicated dataviz team to help you make the most of your data.
            </div>
            <button className="mt-8 2xl:mt-12 bg-gray-800 hover:bg-highlight_2 text-center hover:text-white text-gray-100 font-semibold py-2 px-6 border-2 border-transparent shadow">
              Coming soon <MdKeyboardArrowRight className="inline-block" />
            </button>
          </div>
        </Zoom>
        <Zoom bottom duration={700} delay={1000}>
          <div className="md:w-1/3 ipadp:w-1/5 mx-5 p-3 2xl:p-12 mt-10">
            <MdPeople className="text-5xl" />
            <p className="text-xl font-bold py-3">Support</p>
            <div className="border-t-4 border-gray-700 py-3 text-gray-600">
              Get in touch with us. It is natural that you have found something diffcult to understand or you need more specific guidance and direction.
            </div>
            <button className="mt-8 2xl:mt-12 bg-gray-800 hover:bg-highlight_2 text-center hover:text-white text-gray-100 font-semibold py-2 px-6 border-2 border-transparent shadow">
              Coming soon <MdKeyboardArrowRight className="inline-block" />
            </button>
          </div>
        </Zoom>
        <Zoom bottom duration={700} delay={1250}>
        <div className="md:w-1/3 ipadp:w-1/5 mx-5 p-3 2xl:p-12 mt-10">
          <div>
            <RiMenuAddLine className="text-5xl" />
            <p className="text-xl font-bold py-3">Contribution</p>
            <div className="border-t-4 border-gray-700 py-3 text-gray-600">
              We love to see people actively sharing their thought and creativity. We have prepared a tutorial for you to upload your own blog posts.
            </div>
          </div>
          <button onClick={() => window.open("https://github.com/researchdata-sheffield/dataviz-hub2/blob/master/README.md", '_blank','noopener, noreferrer')} className="mt-8 2xl:mt-12 bg-gray-800 hover:bg-highlight_2 text-center hover:text-white text-gray-100 font-semibold py-2 px-6 border-2 border-transparent shadow">
            <a href="https://github.com/researchdata-sheffield/dataviz-hub2/blob/master/README.md" target="_blank" rel="noopener noreferrer">Our repository <MdKeyboardArrowRight className="inline-block" /></a>
          </button>
        </div>
        </Zoom>
      </div>
    </div>
  )

}

export default HomeCommunity

