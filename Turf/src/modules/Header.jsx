import React from 'react'
import './Mainstyle.css'

const Header = ({ phone, email }) => {
  return (
    <>
    <header className='main-header w-100 '>
        <div className="container-fluid">
        <div className="row d-flex justify-content-between w-100">
            <div className="col-lg-6 header-1 px-lg-4">
                <div className='header-left d-flex'>
                    <div className='header-phone '><i className="fa-solid fa-phone-volume px-2"></i><a href={phone}>0123-452-789</a></div>
                    <div className='header-email'><i className="fa-solid fa-envelope px-2"></i><a href={email}>Hello@byloop.in</a></div>
                </div>
            </div>
            <div className="col-lg-6 ">
                <div className='header-right pt-lg-1 pb-lg-0 pb-2'>
                    <a><i className="fa-brands fa-square-instagram"></i></a>
                    <a><i className="fa-brands fa-square-facebook"></i></a>
                    <a><i className="fa-brands fa-linkedin"></i></a>
                    <a><i className="fa-brands fa-square-twitter"></i></a>
                </div>
            </div>
        </div>
        </div>
    </header>
    </>
  )
}

export default Header