import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Mainstyle.css';


const Hero = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            {/*================== Section 1============== */}

            <div className="hero-1">
                <div className="hero-2 container hero">
                    <div className="row pt-5">
                        <div className="col-lg-6 col-md-12 hero-3 px-lg-0 px-4">
                            <div className="hero-4">
                                <h1 className='' data-aos="fade-up" data-aos-duration="1000">Let's Play <br /> with the World</h1>
                                <p className='disabled' data-aos="fade-up" data-aos-duration="2000">
                                    Paragraphs are medium-sized units of writing, longer than sentences, but shorter than sections, chapters, or entire works. Because they connect the “small” ideas of individual sentences to a “bigger” idea, paragraph structure is essential to any writing for organization, flow, and comprehension.
                                </p>
                                <div data-aos="fade-up" data-aos-duration="3000">
                                    <button type="button" className="btn btn-hero">Get Started</button>
                                    <button type="button" className="btn btn-outline-hero mx-3">Primary</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 hero-5 mt-4" data-aos="fade-up" data-aos-duration="3000">
                            <div className="box">
                                <div className="form">
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

            {/* ===================Section 2 ==================*/}

            <section className="container-fluid section2-main-container">
                <div className="container hero-about">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-lg-6 " data-aos="fade-up" data-aos-duration="3000">
                            <div className='p-lg-5 mt-lg-0 mt-5 abb'>
                                <img src="./image/Rectangle.png" className='img-fluid section2-about-img' alt="" />
                                <div className='hero-small-box mx-lg-0 mx-4 mt-4  '>
                                    <h1 className='small-box-heading'></h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-lg-0 mt-5 " >
                            <div className=''>
                                <h1 className='text-uppercase section2-about-heading ' data-aos="fade-up" data-aos-duration="1000">We Welcome you <br />to OUR way to turf</h1>
                                <p className='pt-2'  data-aos="fade-up" data-aos-duration="1000">A paragraph is defined as “a group of sentences or a single sentence that forms a unit” Lunsford and Connors 116.
                                    A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116).</p>

                                <br />
                                <p  data-aos="fade-up" data-aos-duration="1000">Publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual design, Lorem ipsum is a placeholder.</p>
                                <div className=""  data-aos="fade-up" data-aos-duration="1000">
                                    <button type="button" className="btn btn-hero hero-about-btn mt-3">About us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*================== Section 3============== */}

            <section className='our-turf '>
                <div className="container text-center pt-5">
                    <div className='text-center '>
                        <h1 className='our-turf-header'data-aos="fade-up"  data-aos-duration="1000">We Welcome to our Turf Services </h1>
                        <p className='display-6'data-aos="fade-up"  data-aos-duration="1000">A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). <br />  Length and appearance do not determine whether a section.</p>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4" data-aos="zoom-in-up" data-aos-duration="2000">
                            <div className="text-center p-lg-5 mt-lg-0 mt-5">
                                <div className="text-center px-4 py-2 section3-turf-border">
                                    <img src="./icons/Group1.png" className="img-fluid" alt="" />
                                    <h5 className="pt-4 section3-turf-heading">Searching</h5>
                                    <p className="display-6">
                                        A paragraph is defined as “a group of sentences or a single
                                        sentence that forms a uni.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="zoom-in-up" data-aos-duration="2000">
                            <div className="text-center p-lg-5 mt-lg-0 mt-2">
                                <div className="text-center px-4 py-3 section3-turf-border">
                                    <img src="./icons/Group2.png" className="img-fluid" alt="" />
                                    <h5 className="pt-4 section3-turf-heading">Turf &amp; Training</h5>
                                    <p className="display-6">
                                        A paragraph is defined as “a group of sentences or a single
                                        sentence that forms a uni.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="zoom-in-up"data-aos-duration="2000">
                            <div className="text-center p-lg-5 mt-lg-0 mt-2">
                                <div className="text-center px-4 py-3 section3-turf-border">
                                    <img src="./icons/Group3.png" className="img-fluid" alt="" />
                                    <h5 className="pt-4 section3-turf-heading">Book your Turf</h5>
                                    <p className="display-6">
                                        A paragraph is defined as “a group of sentences or a single
                                        sentence that forms a uni.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                 {/* Seconde Turf Line  */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 "data-aos="zoom-in-up" data-aos-duration="2000">
                            <div className="text-center px-lg-5 p-2 mt-lg-0 mt-5">
                                <div className="text-center px-4 pb-3 section3-turf-border">
                                    <img src="./icons/Group1.png" className="img-fluid" alt="" />
                                    <h5 className="pt-4 section3-turf-heading">Searching</h5>
                                    <p className="display-
                                    
                                    6">
                                        A paragraph is defined as “a group of sentences or a single
                                        sentence that forms a uni.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4"data-aos="zoom-in-up" data-aos-duration="2000">
                            <div className="text-center px-lg-5  p-2 mt-lg-0 mt-2">
                                <div className="text-center px-4 p-3 section3-turf-border">
                                    <img src="./icons/Group2.png" className="img-fluid" alt="" />
                                    <h5 className="pt-4 section3-turf-heading">Turf &amp; Training</h5>
                                    <p className="display-6">
                                        A paragraph is defined as “a group of sentences or a single
                                        sentence that forms a uni.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4"data-aos="zoom-in-up" data-aos-duration="2000">
                            <div className="text-center px-lg-5  p-2 mt-lg-0 mt-2">
                                <div className="text-center px-4 pb-3 section3-turf-border">
                                    <img src="./icons/Group3.png" className="img-fluid" alt="" />
                                    <h5 className="pt-4 section3-turf-heading">Book your Turf</h5>
                                    <p className="display-6">
                                        A paragraph is defined as “a group of sentences or a single
                                        sentence that forms a uni.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>

            {/*================== Section 4============== */}

            <div className='container-fluid section4-short-container'>
                <div className='container'>
                    <div className="row section4-short-row ">
                        <div className="col-lg-6">
                            <div>
                                <img src="./image/player.png" className='img-fluid' alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className='d-flex'>
                                
                        <i className="fa-solid fa-quote-left px-1 "></i><h1 className='text-uppercase section4-short-heading' > Information About <br /> the Turf <i className="fa-solid fa-quote-right"></i> </h1>
                            </div>
                            <div className='section4-ul mt-1'>
                                
                                    <li className='pt-2'><i className="fa-solid fa-circle-plus px-2"></i><b>A paragraph is defined as group of sentences or a single sentence.</b> </li>
                                    <li className='pt-2'><i className="fa-solid fa-circle-plus px-2"></i><b>A paragraph is defined as group of sentences or a single sentence. </b> </li>
                                    <li className='pt-2'><i className="fa-solid fa-circle-plus px-2"></i><b>A paragraph is defined as group of sentences or a single sentence.</b> </li>
                                    <li className='pt-2'><i className="fa-solid fa-circle-plus px-2"></i><b>A paragraph is defined as group of sentences or a single sentence.</b> </li>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*================== Section 5============== */}

            <div className='container-fluid mt-5 section5-main-container'>
                
                <div className="container ">
                    <div className="row section5  pt-5">
                        <div className="col-lg-6 section5-col">
                            <div className=''> 
                                <h1 className='section5-heading'>Download our app now ! </h1>
                                <p className=''>A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116).
                                Length and appearance do not determine whether a section.</p>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <img src="" alt="" />
                                    </div>
                                    <div className='col-lg-6'>
                                        <img src="" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img src="./image/app-men.png" className='img-fluid'  alt="" />
                        </div>
                    </div>
                </div>                
            </div>
  
        </>
    )
}

export default Hero