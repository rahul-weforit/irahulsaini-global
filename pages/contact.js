import Layout from './layout'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import {Accordion} from '../components/card'
import { Breadcrumb } from '../components/Breadcrumb'
import 'bootstrap-icons/font/bootstrap-icons.css'


export default function Home(){
    const meta_title = 'Contact';
    const meta_desc = 'Contact';
    const og_image = '';
    const crumbs = [
        {
            title:'Contact',
            link:'/contact/'
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
                title="Contact"
                crumbs={crumbs}
            />


<div className="container py-5">
	<div className="row pt-5">
		<div className="col-md-8">
			<h4 className="text-uppercase border-bottom pb-2">
				<span className="text-primary">Message</span> Me
			</h4>
			<p><em>You can send your message just by filling simple form below. Don't worry your data will secure and Confidential. <i className="far fa-smile text-success"></i></em></p>
			
		</div>
		<div className="col-md-4">
			<h4 className="text-uppercase border-bottom pb-2">
				<span className="text-primary">Contact</span> Details
			</h4>
			<ul className="list-unstyled mb-0">
				<li>
					<a href="tel:+919999031317" className="text-muted py-1 d-flex align-items-center">
						<i className="bi bi-phone me-2"></i>
						(+91) 9999 031 317
					</a>
				</li>
				<li>
					<a href="https://wa.me/919999031317" rel="nofollow" target="_blank" className="text-muted py-1 d-flex align-items-center">
						<i className="bi bi-whatsapp me-2"></i>
						(+91) 9999 031 317
					</a>
				</li>
				<li>
					<a href="mailto:hello@irahulsaini.com" className="text-muted py-1 d-flex align-items-center">
						<i className="bi bi-envelope me-2"></i>
						hello@irahulsaini.com
					</a>
				</li>
			</ul>
			<hr/>
			<ul className="list-inline mb-0 rs-footer-social mt-1 text-center text-md-left">
				<li className="list-inline-item mr-1">
					<a href="#" className="btn rounded-circle" target="_blank" rel="nofollow" title="Github">
						<i className="bi fa-github"></i>
					</a>
				</li>
				<li className="list-inline-item mr-1">
					<a href="#" className="btn rounded-circle" target="_blank" rel="nofollow" title="Linkdein">
						<i className="bi fa-linkedin"></i>
					</a>
				</li>
				<li className="list-inline-item mr-1">
					<a href="#" className="btn rounded-circle" target="_blank" rel="nofollow" title="Facebook">
						<i className="bi fa-facebook-f "></i>
					</a>
				</li>
				<li className="list-inline-item mr-1">
					<a href="#" className="btn rounded-circle" target="_blank" rel="nofollow" title="Twitter">
						<i className="bi fa-twitter "></i>
					</a>
				</li>
				<li className="list-inline-item mr-1">
					<a href="#" className="btn rounded-circle" target="_blank" rel="nofollow" title="Instagram">
						<i className="bi fa-instagram "></i>
					</a>
				</li>
			</ul>
		</div>
	</div>
</div>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.981227516242!2d77.03603911455465!3d28.41982330042807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23aa826b3185%3A0xb736a8dfe7b6bdb9!2sRahul%20Saini%20%7C%20Website%20Design%20%26%20Development%20Gurgaon!5e0!3m2!1sen!2sin!4v1631166765927!5m2!1sen!2sin" width="100%" height="450" allowFullScreen="" loading="lazy"></iframe>
	
            
               
        </Layout>
    )
}
