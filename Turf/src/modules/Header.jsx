import React from 'react'
import './Mainstyle.css'

const Header = ({ phone, email }) => {
  return (
    <>
    <header className='main-header w-100 '>
        <div className="container-fluid">
        <div className="row w-100">
            <div className="col-lg-6 header-1 px-4">
                <div className='header-left d-flex'>
                    <div className='header-phone '><i className="fa-solid fa-phone-volume"></i><a href={phone}>0123-452-789</a></div>
                    <div className='header-email'><i class="fa-solid fa-envelope"></i><a href={email}>Hello@byloop.in</a></div>
                </div>
            </div>
            <div className="col-lg-6 ">
                <div className='header-right bg-danger'>
                    <p><a><i className="fa-brands fa-square-instagram"></i></a></p>
                    <p><a><i className="fa-brands fa-square-facebook"></i></a></p>
                    <p><a><i className="fa-brands fa-linkedin"></i></a></p>
                    <p><a><i className="fa-brands fa-square-twitter"></i></a></p>
                </div>
            </div>
        </div>
        </div>
    </header>
    </>
  )
}

export default Header