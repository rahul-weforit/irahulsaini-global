import Layout from '../layout'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import {Accordion} from '../../components/card'
import { Breadcrumb } from '../../components/Breadcrumb'
import 'bootstrap-icons/font/bootstrap-icons.css'


export default function Home(){
    const meta_title = 'Best Web Developer In Gurgaon | Web Designing Company';
    const meta_desc = 'We are a web development company in Gurgaon. We provide best web developers in Gurgaon. We are specialized in developing websites and Building Mobile Apps.';
    const og_image = '';
    const crumbs = [
        {
            title:'Services',
            link:'/services/'
        },
        {
            title:'Web Developer In Gurgaon',
            link:'/services/web-development/'
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
                title="Web Developer In Gurgaon"
                crumbs={crumbs}
            />

            <section className="bg-white py-5">
                <div className="container">
                    <h2 className="h3 text-primary">Web Developer In Gurgaon</h2>
                    
                </div>
            </section>  
            
            
               
        </Layout>
    )
}
