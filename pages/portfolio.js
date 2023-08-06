import Layout from './layout'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import {Accordion} from '../components/card'
import { Breadcrumb } from '../components/Breadcrumb'
import 'bootstrap-icons/font/bootstrap-icons.css'


export default function Home(){
    const meta_title = 'Portfolio';
    const meta_desc = 'Portfolio';
    const og_image = '';
    const crumbs = [
        {
            title:'Portfolio',
            link:'/portfolio/'
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
                title="Portfolio"
                crumbs={crumbs}
            />


			<div className="container py-5">
					<h2 className='text-center'>Coming Soon!</h2>
			</div>

            
               
        </Layout>
    )
}
