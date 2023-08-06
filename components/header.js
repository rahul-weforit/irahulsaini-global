import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react'
import {Search} from './icons.js'

export default function Header(){
    const [toggle, setToggle] = useState(false);
    const [searchToggle, setSearchToggle] = useState(false);
    /*
    const toggleNavbar = (element) => {
        console.log(element)
        let target = element.classList;
        console.log(target)
        //document.querySelector(e)
    }
    */
    return (
        <>
        
            <header className='fixed-top border-bottom border-light bg-white shadow-sm'>
                <div className='container'>
                    <nav className='navbar navbar-expand-md navbar-primary py-md-2 mb-0'>
                        <Link href="/" className="navbar-brand px-3 px-md-0">
                            <Image className="rounded-1" src="/dist/images/logo-dark-min.jpg" width={30} height={30} alt="Logo" priority/>
                        </Link>
                        <button className='navbar-toggler d-md-none py-2 border-0' type='button' aria-label="Menu Toggle" aria-labelledby="rsnavbar" title="Toggle Menu" data-bs-target='#rsnavbar' data-bs-toggle='collapse' >
                        <span className='navbar-toggler-icon'></span>
                        </button> 
                        <div className={`collapse navbar-collapse`}  id='rsnavbar'>
                            <ul className='navbar-nav ms-0 ms-md-auto mb-2 mb-lg-0 small'>
                                <li className='nav-item'>
                                    <Link aria-current='page' className='nav-link  px-3' href='/'>Home</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link px-3' href='/about/'>About</Link>
                                </li>
                                <li className='nav-item dropdown'>
                                    <a className='nav-link px-3 dropdown-toggle' id="dropdownMenuButton1" data-bs-toggle="dropdown" href='#'>Services</a>
                                    <div className='dropdown-menu' aria-labelledby="dropdownMenuButton1">
                                        <Link 
                                            href="/services/website-designing-services-in-gurgaon/" 
                                            className="dropdown-item small py-1 px-3">
                                            Web Designing
                                        </Link>
                                        <Link 
                                            href="/services/web-development/" 
                                            className="dropdown-item small py-1 px-3">
                                            Web Development
                                        </Link>
                                        <Link 
                                            href="/services/app-development/"
                                            className="dropdown-item small py-1 px-3">
                                            App Development
                                        </Link>
                                        <Link 
                                            href="/services/crm-development/" 
                                            className="dropdown-item small py-1 px-3">
                                            CRM Development
                                        </Link>
                                        <Link
                                            href="/services/portal-development/"
                                            className="dropdown-item small py-1 px-3">
                                            Portal Development
                                        </Link>
                                        <Link 
                                            href="/data-scraping-services/"
                                            className="dropdown-item small py-1 px-3">
                                            Data Mining / Data Scrapping
                                        </Link>
                                        <Link 
                                            href="/services/graphic-designing/" 
                                            className="dropdown-item small py-1 px-3">
                                            Graphic Designing
                                        </Link>
                                        <Link 
                                            href="/services/logo-designing"
                                            className="dropdown-item small py-1 px-3">
                                            Logo Designing
                                        </Link>
                                        <Link 
                                            href="/services/digital-marketing" 
                                            className="dropdown-item small py-1 px-3">
                                            Digital Designing
                                        </Link>
                                        <Link 
                                            href="/services/content-writing"
                                            className="dropdown-item small py-1 px-3">
                                            Content Writing
                                        </Link>
                                    </div>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link px-3' href='/portfolio/'>Portfolio</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link px-3' href='/tools/'>Online Tools</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link px-3' href='/contact/'>Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <Link href="/contact/" className='btn btn-sm btn-primary d-none py-2 ms-md-3 px-4 d-md-inline-block'>
                            <i className="me-2 bi bi-headphones"></i>
                            Get a Quote
                        </Link>
                    </nav>
                </div>
            </header>   
        </>
    )
}