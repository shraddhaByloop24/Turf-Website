import React from 'react'
import './Mainstyle.css'

const Hero = () => {

    return (
        <>
            <div className="hero-1 " >
                <div className="hero-2 container hero">
                    <div className="row pt-5">
                        <div className="col-lg-6 hero-3 ">
                            <div className="hero-4">
                                <h1>Let's Play <br /> with the World</h1>
                                <p>
                                    Paragraphs are medium-sized units of writing, longer than sentences, but shorter than sections, chapters, or entire works. Because they connect the “small” ideas of individual sentences to a “bigger” idea, paragraph structure is essential to any writing for organization, flow, and comprehension.
                                </p>
                                <div>
                                    <button type="button" className="btn btn-hero">Get Started</button>
                                    <button type="button" className="btn btn-outline-hero mx-3">Primary</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 hero-5 mt-4  ">

                            <div className="box">
                                <div className="form ">
                                    <h5 className='text-center text-white text-uppercase pb-2'>Get Started</h5>
                                    <form>
                                        <div className="InputBx">

                                            <input type="text" placeholder="Username" />

                                        </div>
                                        <div className="InputBx">
                                            <input type="email" placeholder="Email" />

                                        </div>
                                        <div className="InputBx">
                                            <input type="password" placeholder="Password" />

                                        </div>
                                        <div className="InputBx">
                                            <textarea placeholder="Additional Information"></textarea>

                                        </div>
                                        <div className="text-center">
                                            <button type="button" className="btn btn-hero hero-form">Login</button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 2 */}
            <section className="container-fluid section2-main-container">
                <div className="container hero-about">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-lg-6">
                            <div className='p-lg-5 abb'>
                                <img src="./image/Rectangle.png" className='img-fluid section2-about-img' alt="" />
                                <div className='hero-small-box'>
                                    <h1 className='small-box-heading'>Let's Play <br />play the Game</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className=''>
                                <h1 className='text-uppercase'>We Welcome you <br />to OUR way to turf</h1>
                                <p className='pt-2'>A paragraph is defined as “a group of sentences or a single sentence that forms a unit” Lunsford and Connors 116.
                                    A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116).</p>

                                <br />
                                <p>Publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual design, Lorem ipsum is a placeholder.</p>
                                <div className="">
                                    <button type="button" className="btn btn-hero hero-about-btn mt-3">About us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Section 3 */}

             <section className='our-turf'>
                <div className="container w-50 pt-5">
                    <div className='text-center'>
                        <h1 className='our-turf-header'>We Welcome you <br />
                        to OUR way to tyrf </h1>
                        <p>A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section.</p>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className='text-center p-5 '>
                                <div className='text-center px-4 py-3 border' >
                                    <img src="./icons/Group1.png"className='img-fluid' alt="" />
                                    <h5 className='pt-4'>Search or Turf</h5>
                                    <p>A paragraph is defined as “a group of sentences or a single sentence that forms a uni.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                        <div className='text-center p-5 '>
                                <div className='text-center px-4 py-3 border' >
                                    <img src="./icons/Group2.png"className='img-fluid' alt="" />
                                    <h5 className='pt-4'>Search or Turf</h5>
                                    <p>A paragraph is defined as “a group of sentences or a single sentence that forms a uni.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                        <div className='text-center p-5 '>
                                <div className='text-center px-4 py-3 border' >
                                    <img src="./icons/Group3.png"className='img-fluid' alt="" />
                                    <h5 className='pt-4'>Search or Turf</h5>
                                    <p>A paragraph is defined as “a group of sentences or a single sentence that forms a uni.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
        </>
    )
}

export default Hero