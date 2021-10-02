import React from 'react'

function Services() {
    return (
        <section id="services" className="text-gray-600 body-font">

        <div className="container px-5 py-24 mx-auto">
      
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="title sm:text-3xl text-2xl font-medium title-font mb-2 text-white">IT'S TIME TO LEARN CODING</h1>
            <div className="h-1 w-20 bg-purple-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-white">You can learn coding and create your own websites or application which you can use for business purpose. So join us in this awesome journey of coding.        </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className=" bg-transparent p-6 rounded-lg">
              <img className="h-40 rounded w-full object-cover object-center mb-6" src="Img/codingimg3.jpg" alt="content" />
              <h2 className="text-lg text-white font-medium title-font mb-4">Web Development</h2>
              <p className="leading-relaxed text-base text-white">In our channel you can learn web development and create websites.</p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className=" bg-transparent p-6 rounded-lg">
              <img className="h-40 rounded w-full object-cover object-center mb-6" src="Img/codingimg2.jpg" alt="content" />
              <h2 className="text-lg text-white font-medium title-font mb-4">App Development</h2>
              <p className="leading-relaxed text-base text-white">You can also learn App Development and create your own application.</p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className=" bg-transparent p-6 rounded-lg">
              <img className="h-40 rounded w-full object-cover object-center mb-6" src="Img/codingimg4.jpg" alt="content" />
              <h2 className="text-lg text-white font-medium title-font mb-4">Awesome Projects            </h2>
              <p className="leading-relaxed text-base text-white">With us you can create awesome looking like projects.</p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-transparent p-6 rounded-lg">
              <img className="h-40 rounded w-full object-cover object-center mb-6" src="Img/codingimg5.jpg" alt="content" />
              <h2 className="text-lg text-white font-medium title-font mb-4">Responsive</h2>
              <p className="leading-relaxed text-base text-white">The website and app that you will create will be responsive.</p>
            </div>
          </div>
        </div>
      </div>
      </section>
    )
}

export default Services
