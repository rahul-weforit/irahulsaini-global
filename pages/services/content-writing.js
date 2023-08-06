import Layout from '../layout'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import {Accordion} from '../../components/card'
import { Breadcrumb } from '../../components/Breadcrumb'
import 'bootstrap-icons/font/bootstrap-icons.css'


export default function Home(){
    const meta_title = 'Best Website Content Writing Services In Gurgaon | SEO Content India';
    const meta_desc = 'With our expert writers and editors, we can write any kind of content required by your business - whether it&#039;s an article on a particular topic or an email newsletter.';
    const og_image = '';
    const crumbs = [
        {
            title:'Services',
            link:'/services/'
        },
        {
            title:'Website Content Writing Services, Gurgaon',
            link:'/services/content-writing/'
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
                title="Website Content Writing Services, Gurgaon"
                crumbs={crumbs}
            />

            <section className="bg-white py-5">
                <div className="container">
                    <h2 className="h3 text-primary">Website Content Writing Services, Gurgaon</h2>
                        
                </div>
            </section>  
            
            
               
        </Layout>
    )
}
