import Layout from '../layout'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import {Accordion} from '../../components/card'
import { Breadcrumb } from '../../components/Breadcrumb'
import 'bootstrap-icons/font/bootstrap-icons.css'


export default function Home(){
    const meta_title = 'Best Digital Marketing Services In Gurgaon - Rahul Saini';
    const meta_desc = 'Welcome to irahulsaini.com, the best digital marketing services in Gurgaon. We offer a wide range of digital marketing services for every need and budget.';
    const og_image = '';
    const crumbs = [
        {
            title:'Services',
            link:'/services/'
        },
        {
            title:'Digital Marketing Agency , Gurgaon',
            link:'/services/digital-marketing/'
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
                title="Digital Marketing Agency , Gurgaon"
                crumbs={crumbs}
            />

            <section className="bg-white py-5">
                <div className="container">
                    <h2 className="h3 text-primary">Digital Marketing Agency , Gurgaon</h2>
                        
                </div>
            </section>  
            
            
               
        </Layout>
    )
}
