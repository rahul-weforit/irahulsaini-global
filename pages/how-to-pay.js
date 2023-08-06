import Layout from './layout'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import {Accordion} from '../components/card'
import { Breadcrumb } from '../components/Breadcrumb'
import 'bootstrap-icons/font/bootstrap-icons.css'


export default function Home(){
    const meta_title = 'How to Pay';
    const meta_desc = 'How to Pay';
    const og_image = '';
    const crumbs = [
        {
            title:'How to Pay',
            link:'/how-to-pay/'
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
                title="How to Pay"
                crumbs={crumbs}
            />
            
			<section className="page how-to-pay py-5">
				<div className="container">
					<p className="text-center text-muted">Please check Online &amp; Offline Payment Methods</p>
					<div className='row justify-content-center'>
						<div className='col-md-8 col-lg-7 col-xl-6'>
							<ul className="nav nav-tabs row justify-content-center border-0" id="pay-online-tab" role="tablist">
								<li className="nav-item col-6 col-sm-4 col-lg-3" role="presentation">
									<a data-bs-toggle="tab" href="#pay-online" id="pay-online-tab" role="tab" className=" btn btn-primary d-block px-4 py-3 btn-sm text-uppercase">Pay Online</a>
								</li>
								<li className="nav-item col-6 col-sm-4 col-lg-3" role="presentation">
									<a data-bs-toggle="tab" href="#pay-offline" id="pay-offline-tab" className=" btn btn-primary d-block px-4 py-3 btn-sm text-uppercase">Pay Offline</a>
								</li>
							</ul>

					
							<div className="tab-content" id="how-to-pay">
								<div className="tab-pane py-5 fade" id="pay-online" role="tabpanel" aria-labelledby="pay-online-tab">
									<h4 className="mb-3 pb-2 border-bottom">Online Payment Methods:</h4>
									<p>Sorry! No Online Methods available. Please come back and check again.</p>
								</div>
								<div className="tab-pane py-5 fade" id="pay-offline" role="tabpanel" aria-labelledby="pay-offline-tab">
									<h4 className="mb-3 pb-2">Offline Payment Methods:</h4>
									<table className="table table-sm">
										<thead>
											<tr>
												<th colSpan="3" className="text-center">Bank Details for NEFT/IMPS</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>Bank Name</td>
												<td>:</td>
												<td>HDFC</td>
											</tr>
											<tr>
												<td>Account Holder Name</td>
												<td>:</td>
												<td>Rahul Saini</td>
											</tr>
											<tr>
												<td>Account Number</td>
												<td>:</td>
												<td>50100276307010</td>
											</tr>
											<tr>
												<td>Bank IFSC Code</td>
												<td>:</td>
												<td>HDFC0003994</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			
               
        </Layout>
    )
}
