import Layout from './layout'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import {Accordion} from '../components/card'
import { Breadcrumb } from '../components/Breadcrumb'
import 'bootstrap-icons/font/bootstrap-icons.css'


export default function Home(){
    const meta_title = 'Refund Policy';
    const meta_desc = 'Refund Policy';
    const og_image = '';
    const crumbs = [
        {
            title:'Refund Policy',
            link:'/refund-policy/'
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
                title="Refund Policy"
                crumbs={crumbs}
            />
			<div className="container py-5">
				<div className="row justify-content-center pt-5">
					<div className="col-md-8 col-lg-7 ">

						<h2 class="text-center">Return and Refund Policy</h2>

						<p>Last updated: April 01, 2022</p>

						<p>Thank you for business with Rahul Saini.</p>

						<p>If, for any reason, You are not completely satisfied with a services We invite You to review our policy on refunds and returns.&nbsp;</p>

						<p>The following terms are applicable for any services that You purchased with Us.</p>

						<p><strong>Interpretation and Definitions</strong></p>

						<p><strong>Interpretation</strong></p>

						<p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>

						<p><strong>Definitions</strong></p>

						<p>For the purposes of this Return and Refund Policy:</p>

						<ul>
							<li>
							<p><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to Rahul Saini.</p>
							</li>
							<li>
							<p><strong>Goods</strong> refer to the items offered for sale on the Service.</p>
							</li>
							<li>
							<p><strong>Service</strong> refers to the Website.</p>
							</li>
							<li>
							<p><strong>Website</strong> refers to Rahul Saini, accessible from <a href="https://www.irahulsaini.com/" target="_blank">https://www.irahulsaini.com/</a></p>
							</li>
							<li>
							<p><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
							</li>
						</ul>

						<p><strong>Eligible Services for Refund:</strong></p>

						<ul>
							<li>
							<p>Logo Design</p>
							</li>
							<li>Banner/Graphic Design</li>
						</ul>

						<p><strong>Terms &amp; Conditions for Refunds</strong></p>

						<ul>
							<li>If you not received&nbsp;any PSD, AI, CDR File from our team.</li>
						</ul>

						<p><strong>Contact Us</strong></p>

						<p>If you have any questions about our Returns and Refunds Policy, please contact us:</p>

						<ul>
							<li>
							<p>By email: hello@irahulsaini.com</p>
							</li>
							<li>
							<p>By visiting this page on our website: <a href="https://www.irahulsaini.com/contact" target="_blank">https://www.irahulsaini.com/contact</a></p>
							</li>
						</ul>

					</div>
				</div>
			</div>
               
        </Layout>
    )
}
