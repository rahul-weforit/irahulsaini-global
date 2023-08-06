import Layout from './layout'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import {Accordion} from '../components/card'
import { Breadcrumb } from '../components/Breadcrumb'
import 'bootstrap-icons/font/bootstrap-icons.css'


export default function Home(){
    const meta_title = 'Deals & Offers';
    const meta_desc = 'Deals & Offers';
    const og_image = '';
    const crumbs = [
        {
            title:'Deals & Offers',
            link:'/deals-and-offers/'
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
                title="Deals & Offers"
                crumbs={crumbs}
            />
			<section className=" py-5">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-md-8 col-lg-7 col-xl-7">
							<div className='alert alert-info mb-0'>
								Sorry! Currently No deals and offers. Please come back and check again.
							</div>
						</div>
					</div>
				</div>
			</section>


               
        </Layout>
    )
}
