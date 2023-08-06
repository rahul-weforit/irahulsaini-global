import Layout from '../layout'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import {Accordion} from '../../components/card'
import { Breadcrumb } from '../../components/Breadcrumb'
import 'bootstrap-icons/font/bootstrap-icons.css'


export default function Home(){
    const meta_title = 'Best App Developers In Gurgaon | IOS Development';
    const meta_desc = 'We believe that every business needs a mobile app and if you are looking for a reliable mobile app development company then we can be your trusted partner.';
    const og_image = '';
    const crumbs = [
        {
            title:'Services',
            link:'/services/'
        },
        {
            title:'Best App Developers In Gurgaon',
            link:'/services/app-development/'
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
                title="Best App Developers In Gurgaon"
                crumbs={crumbs}
            />

            <section className="bg-white py-5">
                <div className="container">
                    <h2 className="h3 text-primary">Best App Developers In Gurgaon</h2>
                    
                </div>
            </section>  
            
            
               
        </Layout>
    )
}
