import Layout from '../layout'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import {Accordion} from '../../components/card'
import { Breadcrumb } from '../../components/Breadcrumb'
import 'bootstrap-icons/font/bootstrap-icons.css'


export default function Home(){
    const meta_title = 'Best Logo Design Services For Business And Companies | Gurgaon';
    const meta_desc = 'We Provide Best Logo Design Services. Our logo design experts will help you to create a logo that will be effective in attracting new customers and boost brand awareness.';
    const og_image = '';
    const crumbs = [
        {
            title:'Services',
            link:'/services/'
        },
        {
            title:'Logo Designing Company , Gurgaon',
            link:'/services/logo-designing/'
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
                title="Logo Designing Company , Gurgaon"
                crumbs={crumbs}
            />

            <section className="bg-white py-5">
                <div className="container">
                    <h2 className="h3 text-primary">Logo Designing Company , Gurgaon</h2>
                        
                </div>
            </section>  
            
            
               
        </Layout>
    )
}
