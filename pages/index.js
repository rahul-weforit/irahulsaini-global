import Layout from './layout'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import {Industry, Feature, Service, Client} from '../components/card'

import 'bootstrap-icons/font/bootstrap-icons.css'


let industries = [
    {
        'title' : 'Social Networking',
        'class' : 'alert-primary',
        'icon'  : 'bi bi-share'
    },
    {
        'title' : 'Digital Marketing',
        'class' : 'alert-success',
        'icon'  : 'bi bi-search'
    },
    {
        'title' : 'E-Commerce Development',
        'class' : 'alert-dark',
        'icon'  : 'bi bi-basket'
    },
    {
        'title' : 'Video Service',
        'class' : 'alert-info',
        'icon'  : 'bi bi-camera-video'
    },
    {
        'title' : 'Banking Service',
        'class' : 'alert-success',
        'icon'  : 'bi bi-bank'
    },
    {
        'title' : 'Enterprise Service',
        'class' : 'alert-primary',
        'icon'  : 'bi bi-building'
    },
    {
        'title' : 'Education Service',
        'class' : 'alert-success',
        'icon'  : 'bi bi-mortarboard'
    },
    {
        'title' : 'Tour and Travelsg',
        'class' : 'alert-dark',
        'icon'  : 'bi bi-airplane'
    },
    {
        'title' : 'Health Service',
        'class' : 'alert-primary',
        'icon'  : 'bi bi-heart'
    },
    {
        'title' : 'Event and Ticket',
        'class' : 'alert-success',
        'icon'  : 'bi bi-music-note-beamed'
    },
    {
        'title' : 'Restaurant Service',
        'class' : 'alert-dark',
        'icon'  : 'bi bi-archive'
    },
    {
        'title' : 'Business Consultant',
        'class' : 'alert-info',
        'icon'  : 'bi bi-briefcase'
    }
];
export default function Home(){
    const meta_title = 'Best Freelancer Website Developer, Designer in Gurgaon Delhi : Rahul Saini';
    const meta_desc = 'Rahul Saini - Freelance Website Designer and developer in Gurgaon. Offering high Quality website designing, development, app development service at affordable cost in Delhi NCR.';
    const og_image = '';
    return (        
        <Layout>
            <Head>
                <title>{meta_title}</title>
                <meta property="og:title" content={meta_title} />
                <meta name="twitter:title" content={meta_title} />
                <meta name="description" content={meta_desc}/>
                <meta property="og:description" content={meta_desc}/>
                <meta name="twitter:description" content={meta_desc} />                
            </Head>
            <style jsx>{`
            
                .main-banner{
                    background-image:url('/dist/images/bg-1.jpg');
                    background-size:cover;
                    background-position: center top;
                }
                .social-links .btn{
                    width:2.2rem;
                    height:2.2rem;
                    line-height:2.2rem;
                }
                .fill-light{
                    fill:#ffffff;
                }
                .social-links a svg{
                    fill:#ffffff;
                    border:1px solid #fff;
                }
                
                .social-links a:hover svg{
                    fill:#000000;
                }
                
                .banner-wrapper{
                    background-color:rgba(0,0,0,.5);
                    height:100%;
                }
                .portfolio-header {
                    z-index: 1;
                    padding: 5% 0 23% 0;
                }
                .portfolio{
                    position:relative;
                    margin-top:-20%;
                    z-index:1;
                }
                .rs-about-image{
                    position:relative;z-index:1;padding:.8rem
                }
                .rs-about-image img{
                    border-radius:.5rem
                }
                .rs-about-image:after,
                .rs-about-image:before{
                    content:" ";
                    display:block;
                    width:50%;
                    height:50%;
                    position:absolute;
                    z-index:-1;
                    border-radius:.2rem;
                    background-image:linear-gradient(90deg,var(--bs-primary),var(--bs-success))
                }
                .rs-about-image:before{
                    border-top-right-radius:.5rem;right:0;top:0
                }
                .rs-about-image:after{
                    border-bottom-left-radius:.5rem;bottom:0;left:0
                }
                .our-clients{
                    background-image:url('/dist/images/clients.png');
                    height:100px;
                    background-size:90%;
                    bacgrkound-repeat:repeat-x;
                    animation: moves 15s infinite linear;
                    /*
                    background-size: 100vw auto;
                    animation: moves 15s infinite linear;
                    height: 100px;
                    margin: 0;
                    display: flex;
                    background-repeat:repeat-x;
                    width:100%;
                    */
                }
                .rs-card {
                    position:fixed;
                }
                @keyframes moves {
                    to {
                        background-position: -100vw 0%;
                    }
                }
                @media screen and (max-width:767px){
                    .main-banner{
                        background-image:url('/dist/images/bg-mobile.jpg');
                        min-height:100vw;
                    }
                    .our-clients{
                        height:50px;
                        background-size:180%;
                    }
                    .portfolio-row {
                        max-height:400px;
                        overflow:auto;
                    }
                }

            `}
            </style>
            <section className='main-banner h-100 bg-dark'>
                <div className='banner-wrapper py-4 py-md-5 h-100'>
                    <div className='container h-100 py-md-5'>
                        <div className='row justify-content-end align-items-center h-100'>
                            <div className='col-12 text-end'>
                                <div className="lead text-white">Hello...!</div>
                                <div className="h4 mb-0 text-white">I❜m Rahul Saini</div>
                                <div className="h1 mb-4 text-white">Creative Developer</div>
                                <Link href="#portfolio" className="btn font-weight-bold btn-outline-light btn-sm rounded-0 px-5 py-3 text-uppercase mb-1 mr-2">
                                    Explore Profile
                                </Link>

                                <div className='social-links mt-4'>
                                    <a className='btn btn-outline-light p-0 btn-sm rounded-0 me-1 me-md-2' href="https://www.facebook.com/irahulsaini1" rel="nofollow" target="_blank">
                                        <i className="bi bi-facebook"></i>
                                        <span className="visually-hidden">Facebook</span>
                                    </a>
                                    <a className='btn btn-outline-light p-0 btn-sm rounded-0 me-1 me-md-2' href="https://www.instagram.com/irahulsaini_gurgaon/" rel="nofollow" target="_blank">
                                        <i className="bi bi-instagram"></i>
                                        <span className="visually-hidden">Instagram</span>
                                    </a>
                                    <a className='btn btn-outline-light p-0 btn-sm rounded-0 me-1 me-md-2' href="https://twitter.com/i_rahulsaini" rel="nofollow" target="_blank">
                                        <i className="bi bi-twitter"></i>
                                        <span className="visually-hidden">Twitter</span>
                                    </a>
                                    <a className='btn btn-outline-light p-0 btn-sm rounded-0 me-1 me-md-2' href="https://in.linkedin.com/in/rahul-saini-648b7711b" rel="nofollow" target="_blank">
                                        <i className="bi bi-linkedin"></i>
                                        <span className="visually-hidden">Linkedin</span>
                                    </a>
                                    <a className='btn btn-outline-light p-0 btn-sm rounded-0 me-1 me-md-2' href="https://github.com/irahulsaini" rel="nofollow" target="_blank">
                                        <i className="bi bi-github"></i>
                                        <span className="visually-hidden">Github</span>
                                    </a>
                                    <a className='btn btn-outline-light p-0 btn-sm rounded-0 me-1 me-md-2' href="/profile/" rel="nofollow" target="_blank">
                                        <i className="bi bi-download"></i>
                                        <span className="visually-hidden">Download</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
                <section className='portfolio-header bg-primary' id='portfolio'>
                    <div className='container'>
                        <div className='display-5 text-center text-white    '>
                            I Love to Create 
                            <strong className='d-block mt-2'>
                                Beautiful Website & Apps
                            </strong>
                        </div>
                    </div>
                </section>
                <section className='portfolio'>
                    <div className='container pt-md-4'>
                        <div className='row g-0 g-md-3 portfolio-row align-items-center justify-content-center'>
                            <div className='col-3 col-sm-3 col-md-3 col-lg-3'>
                            <div className='portfolio-item mb-1 mb-md-3'>
                                    <Image 
                                        src="/dist/images/projects/girlcares.jpg" 
                                        width={800} 
                                        height={320} 
                                        className='img-thumbnail shadow-sm'
                                        alt="GrilCares"
                                    />
                            </div>
                            </div>
                            <div className='col-4 col-sm-4 col-md-4 col-lg-4'>
                            <div className='portfolio-item  mb-1 mb-md-3'>
                                    <Image 
                                        src="/dist/images/projects/project-2.jpg" 
                                        width={800} 
                                        height={533} 
                                        className='img-thumbnail shadow-sm'
                                        alt="OnlineCFO"
                                    />
                            </div>
                            <div className='portfolio-item  mb-1 mb-md-3'>
                                    <Image 
                                        src="/dist/images/projects/project-3.jpg" 
                                        width={800} 
                                        height={533} 
                                        className='img-thumbnail shadow-sm'
                                        alt="OnlineCFO"
                                    />
                            </div>

                            </div>
                            <div className='col-2 col-sm-2 col-md-2 col-lg-2'>
                            <div className='portfolio-item  mb-1 mb-md-3'>
                                    <Image 
                                        src="/dist/images/projects/project-4-min.jpg" 
                                        width={800} 
                                        height={1200} 
                                        className='img-thumbnail shadow-sm'
                                        alt="OnlineCFO"
                                    />
                            </div>
                                <div className='portfolio-item  mb-1 mb-md-3'>
                                        <Image 
                                            src="/dist/images/projects/project-5-min.jpg" 
                                            width={800} 
                                            height={1200} 
                                            className='img-thumbnail shadow-sm'
                                            alt="OnlineCFO"
                                        />
                                </div>

                            </div>
                            <div className='col-3 col-sm-3 col-md-3 col-lg-3'>
                                <div className='portfolio-item  mb-1 mb-md-3'>
                                        <Image 
                                            src="/dist/images/projects/project-6-min.jpg" 
                                            width={800} 
                                            height={1200} 
                                            className='img-thumbnail shadow-sm'
                                            alt="Project 6"
                                        />
                                </div>

                            </div>
                            <div className='col-12'>
                                
                            </div>
                        </div>


                    </div>
                    
                    <div className="container-fluid bg-light ">
                        <div className="row flex-nowrap flex-md-wrap w-100 overflow-auto rs-clients-carousel g-1 py-3">
                            <Client 
                                image="/dist/images/clients/girlcares.png"
                                title="GirlCares"
                            />
                            <Client 
                                image="/dist/images/clients/atmflix.png"
                                title="atmflix"
                            />
                            <Client 
                                image="/dist/images/clients/globaticherb.png"
                                title="globaticherbs"
                            />
                            
                            <Client 
                                image="/dist/images/clients/loophoop.png"
                                title="loophoop"
                            />
                            <Client 
                                image="/dist/images/clients/jayantigroup.png"
                                title="jayantigroup"
                            />
                            <Client 
                                image="/dist/images/clients/mirackles.png"
                                title="mirackles"
                            />
                            <Client 
                                image="/dist/images/clients/quick-bhaada-transport.png"
                                title="quick bhaada transport"
                            />
                            <Client 
                                image="/dist/images/clients/shreeproperties.png"
                                title="shreeproperties"
                            />
                            <Client 
                                image="/dist/images/clients/markrealesstate.png"
                                title="markrealestate"
                            />
                        </div>
                    </div>
                </section>
                               
        <section className="rsservices bg-white py-5 position-relative">
            <div className="container">
                <p className="small text-center text-uppercase text-primary mb-0">What Can I Do?</p>
                <div className="h4 text-center line-height-1-5 mb-4 font-weight-bold">Design &amp; Technologies Bring to your Life</div>

                <div className="row justify-content-center">
                    
                        <Service
                            title="Web Designing"
                            link="/services/website-designing-services-in-gurgaon/"
                            icon="bi bi-globe"
                        />
                        
                        
                        <Service
                            title="Graphic Desinging"
                            link="/services/graphic-designing/"
                            icon="bi bi-brush"
                        />
                        
                        <Service
                            title="Logo Desinging"
                            link="/services/logo-designing/"
                            icon="bi bi-basket"
                        />
                        
                        <Service
                            title="Software & Tools"
                            link="/services/logo-designing/"
                            icon="bi bi-gear"
                        />
                        
                        <Service
                            title="Web Development"
                            link="/services/web-development/"
                            icon="bi bi-terminal"
                        />
                        
                        <Service
                            title="App Development"
                            link="/services/app-development/"
                            icon="bi bi-android2"
                        />
                        
                        <Service
                            title="Portal Development"
                            link="/services/portal-development/"
                            icon="bi bi-window-split"
                        />
                        
                        <Service
                            title="CRM Development"
                            link="/services/crm-development/"
                            icon="bi bi-people"
                        />
                        
                        <Service
                            title="Data Mining"
                            link="/data-scraping-services/"
                            icon="bi bi-window-sidebar"
                        />

                        <Service
                            title="Digital Marketing"
                            link="/services/digital-marketing/"
                            icon="bi bi-database-add"
                        />
                        
                        <Service
                            title="OCR Services"
                            link="#"
                            icon="bi bi-file-earmark-word"
                        />
                        
                        <Service
                            title="Many More"
                            link="#"
                            icon="bi bi-file-earmark-word"
                        />
                        
                </div>
            </div>
        </section>
            <section className="py-5 bg-light">
                <div className="container">
                    <p className="small text-center text-uppercase text-primary mb-0">Free Features With Every Package</p>
                    <div className="h4 text-center line-height-1-5 mb-4 font-weight-bold">Features & Benefits</div>
                    <div className="row justify-content-md-center flex-nowrap flex-md-wrap overflow-auto w-100">
                        <Feature
                            icon="bi bi-easel"
                            title="Modern Design"
                            content="Make Your Brand Unique that looks better from others"
                        />
                        <Feature
                            icon="bi bi-phone"
                            title="100% Responsive"
                            content="Make One App for Multiple Devices & Save Your Money"
                        />
                        <Feature
                            icon="bi bi-search"
                            title="SEO Friendly"
                            content="SEO Friendly Design & Development that Boost Rank"
                        />
                        <Feature
                            icon="bi bi-file-lock2"
                            title="Secure"
                            content="Secure Development for Protect data from hackers"
                        />
                        <Feature
                            icon="bi bi-lightning"
                            title="Fast Speed"
                            content="App & Website that quickly loads in user's device"
                        />
                        <Feature
                            icon="bi bi-chat-quote"
                            title="Chat Integration"
                            content="Free Chat Integration into your website or apps"
                        />
                        <Feature
                            icon="bi bi-hand-index"
                            title="CTA Oriented"
                            content="CTA oriented for lead generation"
                        />
                        <Feature
                            icon="bi bi-headset"
                            title="Dedicated Support"
                            content="We're available for dedicated support in business hours"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-white pb-2">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-6 py-5 order-md-2">
                            <p className="small text-primary text-uppercase mb-2 mb-md-3 mb-lg-4">About<i className="ms-2 bi bi-arrow-right"></i></p>
                            <div className="display-4 text-uppercase mb-2 mb-md-3 mb-lg-4">Brief Summary</div>
                            <p className="text-muted mb-2 mb-md-3 mb-lg-4 text-justify">We are a team of Professional Web App Developer, Website Designer, Graphic Designer, Digital Marketer and Content Writer. We loves making content that Looking for a great way to expose your business to the online audience? We can help, We have fantastic strategies and original ideas to bring your imagination to life and create a perfect intro for your products and services for the consumers.</p>
                            <Link href="/about/" className="btn btn-outline-primary btn-sm text-uppercase px-5 py-3 rounded-0">Read More<i className="ms-3 bi bi-arrow-right"></i></Link>
                        </div>
                        <div className="col-sm-8 col-md-6">
                            <div className="rs-about-image">
                                <Image src="/dist/images/about.jpg"
                                    width={546}
                                    height={364}
                                    alt="About"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-5' style={{background:'#F1FCFF'}}>
                <div className='container'>
                    <div className='row align-items-center '>
                        <div className="col-lg-4">
                            <p className="text-dark text-uppercase">Industries I Work For<i className="ms-3 bi bi-arrow-right"></i></p>
                            <div className="display-4 line-height-1-5 font-weight-bold mb-3">Helping Businesses in All Domains</div>
                            <p className="small">We promise to deliver you the best of the best services through our passion for website development, design and app development. We are delighted to create content for our clients. Our aim is to bring our clients ideas to life and be a one stop solution provider for all clients problems. We provide services from web development, web design, app development to all the services that a client may require under digital marketing.</p>
                        </div>          
                        <div className='col-lg-8'>
                            <div className="row industries-row flex-nowrap flex-md-wrap overflow-auto justify-content-center">

                                {
                                    industries.map((element,index) => {
                                       return <Industry key={index} icon={element.icon}  cls={element.class} title={element.title} />
                                    })
                                }
                            </div> 
                        </div>
                    </div>
                    
                    {/*
                    <div className="row rs-clients-carousel g-1">
                        <div className="col-3 col-md">
                            <div className="rs-client d-flex align-items-center bg-white shadow-sm my-2">
                                <img src="https://cdn.irahulsaini.com/dist/images/clients/girlcares.png"/>
                            </div>
                        </div>
                        <div className="col-3 col-md">
                            <div className="rs-client d-flex align-items-center bg-white shadow-sm my-2">
                                <img src="https://cdn.irahulsaini.com/dist/images/clients/atmflix.png"/>
                            </div>
                        </div>
                        <div className="col-3 col-md">
                            <div className="rs-client d-flex align-items-center bg-white shadow-sm my-2">
                                <img src="https://cdn.irahulsaini.com/dist/images/clients/globaticherb.png"/>
                            </div>
                        </div>
                        <div className="col-3 col-md">
                            <div className="rs-client d-flex align-items-center bg-white shadow-sm my-2">
                                <img src="https://cdn.irahulsaini.com/dist/images/clients/loophoop.png"/>
                            </div>
                        </div>
                        <div className="col-3 col-md">
                            <div className="rs-client d-flex align-items-center bg-white shadow-sm my-2">
                                <img src="https://cdn.irahulsaini.com/dist/images/clients/jayantigroup.png"/>
                            </div>
                        </div>
                        <div className="col-3 col-md">
                            <div className="rs-client d-flex align-items-center bg-white shadow-sm my-2">
                                <img src="https://cdn.irahulsaini.com/dist/images/clients/mirackles.png"/>
                            </div>
                        </div>
                        <div className="col-3 col-md">
                            <div className="rs-client d-flex align-items-center bg-white shadow-sm my-2">
                                <img src="https://cdn.irahulsaini.com/dist/images/clients/quick-bhaada-transport.png"/>
                            </div>
                        </div>
                        <div className="col-3 col-md">
                            <div className="rs-client d-flex align-items-center bg-white shadow-sm my-2">
                                <img src="https://cdn.irahulsaini.com/dist/images/clients/shreeproperties.png"/>
                            </div>
                        </div>
                        <div className="col-3 col-md">
                            <div className="rs-client d-flex align-items-center bg-white shadow-sm my-2">
                                <img src="https://cdn.irahulsaini.com/dist/images/clients/markrealesstate.png"/>
                            </div>
                        </div>
                    </div>
                    */}


                </div>
            </section>
            
        </Layout>
    )
}
function outputIndustries(){
    let output = '';
    industries.forEach(element => {
        output += <Industry title={element.title} cls={element.class}/>
    });
    console.log(output)
    return output;
}

