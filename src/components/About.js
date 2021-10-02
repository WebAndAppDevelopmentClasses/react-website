import React from 'react'

function About() {
    return (
        <div>
            <section id="about" className="text-gray-600 body-font">

                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center rounded" alt="hero" src="Img/codingimg3.jpg" />
                    </div>
                    <div
                        className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title title-font sm:text-4xl text-3xl mb-4 font-medium text-white">OUR MISSION
                            <br className="hidden lg:inline-block"/>
                        </h1>
                        <p className="mb-8 leading-relaxed text-white">Teach and Learn Coding to create own websites and own
                            application. </p>
                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div
                        className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title title-font sm:text-4xl text-3xl mb-4 font-medium text-white">OUR YOUTUBE
                            CHANNEL
                            <br className="hidden lg:inline-block"/>
                        </h1>
                        <p className="mb-8 leading-relaxed text-white">We have a YouTube Channel. Our channel name is <span
                            className="text-white"><a
                                href="https://www.youtube.com/channel/UCAp1VvnTMHTGmNTf-lrBqmg">Web And
                                App Development Classes.</a></span></p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
