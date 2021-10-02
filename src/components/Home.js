import React from 'react'

function Home() {
    return (
        <div className="home">
        <section id="home" className="text-white body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className=" title title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Web And App
                <br className="hidden lg:inline-block" />Development Classes
              </h1>
              <p className="mb-8 leading-relaxed">Welcome to Web And App Development Classes. In this website you will be able to learn coding and create your own website or application.</p>
              <div className="flex justify-center">
                <a href="https://www.youtube.com/channel/UCAp1VvnTMHTGmNTf-lrBqmg" target="_channel"><button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg" >Learn Coding</button></a>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img className="object-cover object-center rounded" alt="hero" src="Img/codingimg1.jpg" />
            </div>
          </div>
        </section>
        </div>
    )
}

export default Home
