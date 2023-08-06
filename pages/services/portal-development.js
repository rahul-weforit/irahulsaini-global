import Layout from '../layout'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import {Accordion} from '../../components/card'
import { Breadcrumb } from '../../components/Breadcrumb'
import 'bootstrap-icons/font/bootstrap-icons.css'


export default function Home(){
    const meta_title = 'Top Website Portal Development |Shopify Developer Portal,Gurgaon';
    const meta_desc = 'We&#039;ll take care of everything from designing your site to building it and getting it live on the web. You can even use our API to integrate features into your site.';
    const og_image = '';
    const crumbs = [
        {
            title:'Services',
            link:'/services/'
        },
        {
            title:'Shopify Developer Portal, Gurgaon',
            link:'/services/portal-development/'
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
                title="Shopify Developer Portal, Gurgaon"
                crumbs={crumbs}
            />

            <section className="bg-white py-5">
                <div className="container">
                    <h2 className="h3 text-primary">Shopify Developer Portal, Gurgaon</h2>
                        
                </div>
            </section>  
            
            
               
        </Layout>
    )
}
