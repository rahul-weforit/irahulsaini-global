import Layout from './layout'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import {Team, Client} from '../components/card'
import { Breadcrumb } from '../components/Breadcrumb'
import 'bootstrap-icons/font/bootstrap-icons.css'


export default function Home(){
    const meta_title = 'Our Team - Best Freelancer Website Developer, Designer in Gurgaon Delhi';
    const meta_desc = 'Our Team - Freelance Website Designer and developer in Gurgaon. Offering high Quality website designing, development, app development service at affordable cost in Delhi NCR.';
    const og_image = '';
    const crumbs = [
        {
            title:'About Us',
            link:'/about/'
        }
    ];
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
            
            
            <Breadcrumb
                title="About Us"
                crumbs={crumbs}
            />

            <section className="bg-white">
                <div className="container">
                    <div className="row g-0 justify-content-center align-items-center">
                        <div className="col-md-6 py-5 ps-md-4 order-md-2">
                            <p className="small text-primary text-uppercase mb-2 mb-md-3 mb-lg-4">About<i className="ms-2 bi bi-arrow-right"></i></p>
                            <div className="display-4 text-uppercase mb-2 mb-md-3 mb-lg-4">Who are We?</div>
                            <p className="text-muted mb-2 mb-md-3 mb-lg-4 text-justify">We are a team of Professional Web App Developer, Website Designer, Graphic Designer, Digital Marketer and Content Writer. We loves making content that Looking for a great way to expose your business to the online audience? We can help, We have fantastic strategies and original ideas to bring your imagination to life and create a perfect intro for your products and services for the consumers.</p>
                        </div>
                        <div className="col-sm-8 col-md-6">
                                <Image src="/dist/images/about.jpg"
                                    width={546}
                                    height={364}
                                    alt="About"
                                    className='w-100'
                                />
                        </div>
                    </div>
                </div>
            </section>  
            <section className='bg-light'>
                <div className='container'>
                    <div className='row g-0 justify-content-center align-items-center'>
                        <div className="col-md-6 py-5 pe-md-4">
                            <p className="small text-primary text-uppercase mb-2 mb-md-3 mb-lg-4">Our Journey<i className="ms-2 bi bi-arrow-right"></i></p>
                            <div className="display-4 text-uppercase mb-2 mb-md-3 mb-lg-4">Where We Start</div>
                            <p className="text-muted mb-2 mb-md-3 mb-lg-4 text-justify">We are a team of Professional Web App Developer, Website Designer, Graphic Designer, Digital Marketer and Content Writer. We loves making content that Looking for a great way to expose your business to the online audience? We can help, We have fantastic strategies and original ideas to bring your imagination to life and create a perfect intro for your products and services for the consumers.</p>
                        </div>
                        <div className="col-sm-8 col-md-6">
                            
                                <Image src="/dist/images/about.jpg"
                                    width={546}
                                    height={364}
                                    alt="About"
                                    className='w-100'
                                />
                                
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white py-5 mt-5">
                <div className="container">
                    <p className="small text-center text-uppercase text-primary mb-0">We are Professionals</p>
                    <div className="h4 text-center line-height-1-5 mb-4 font-weight-bold">Meet The Team</div>
                    <div className="row flex-nowrap flex-md-wrap w-100 overflow-auto">
                        <Team
                            name="Rahul Saini"
                            desg="Tech Head"
                            image="/dist/images/team/rahul-saini.jpg"
                        />
                        <Team
                            name="Gaurav Sisodiya"
                            desg="Digital Marketing Head"
                            image="/dist/images/team/gaurav-sisodiya.jpg"
                        />
                        <Team
                            name="Tarun Dagar"
                            desg="Social Media Head"
                            image="/dist/images/team/tarun-dagar.jpg"
                        />
                        <Team
                            name="Gurjind Singh"
                            desg="B.D. Head"
                            image="/dist/images/team/gurjind-singh.jpg"
                        />                        
                        
                    </div>
                </div>
            </section>      
            
            <div className="container-fluid bg-light py-5 ">
                <p className="small text-center text-uppercase text-primary mb-0">Clients</p>
                <div className="h4 text-center line-height-1-5 mb-4 font-weight-bold">Our Happy Clients</div>
                    
                <div className="row flex-nowrap flex-md-wrap w-100 overflow-auto rs-clients-carousel g-1 py-3">
                    <Client 
                        image="https://cdn.irahulsaini.com/dist/images/clients/girlcares.png"
                        title="GirlCares"
                    />
                    <Client 
                        image="https://cdn.irahulsaini.com/dist/images/clients/atmflix.png"
                        title="atmflix"
                    />
                    <Client 
                        image="https://cdn.irahulsaini.com/dist/images/clients/globaticherb.png"
                        title="globaticherbs"
                    />
                    
                    <Client 
                        image="https://cdn.irahulsaini.com/dist/images/clients/loophoop.png"
                        title="loophoop"
                    />
                    <Client 
                        image="https://cdn.irahulsaini.com/dist/images/clients/jayantigroup.png"
                        title="jayantigroup"
                    />
                    <Client 
                        image="https://cdn.irahulsaini.com/dist/images/clients/mirackles.png"
                        title="mirackles"
                    />
                    <Client 
                        image="https://cdn.irahulsaini.com/dist/images/clients/quick-bhaada-transport.png"
                        title="quick bhaada transport"
                    />
                    <Client 
                        image="https://cdn.irahulsaini.com/dist/images/clients/shreeproperties.png"
                        title="shreeproperties"
                    />
                    <Client 
                        image="https://cdn.irahulsaini.com/dist/images/clients/markrealesstate.png"
                        title="markrealestate"
                    />
                </div>
            </div>      
        </Layout>
    )
}
