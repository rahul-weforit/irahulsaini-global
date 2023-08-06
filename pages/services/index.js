import Layout from '../layout'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import {Service} from '../../components/card'
import { Breadcrumb } from '../../components/Breadcrumb'
import 'bootstrap-icons/font/bootstrap-icons.css'

 
export default function Home(){
    const meta_title = 'Our Services';
    const meta_desc = 'Our Services';
    const og_image = '';
    const crumbs = [
        {
            title:'Services',
            link:'/services/'
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
                title="Our Services"
                crumbs={crumbs}
            />

 
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
            
            
               
        </Layout>
    )
}
