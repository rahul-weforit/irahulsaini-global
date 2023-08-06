import Image from 'next/image';
import Link from 'next/link';

export default function Footer(){
    return (
        <>

            <section className='bg-primary py-5'>
                <div className='container text-center'>
                    <div className='h1 text-white mb-3'>
                        Get Ready to Start a Project?
                        <br/>
                    </div>
                    <Link href="/contact/" className='btn btn-lg btn-outline-light rounded-0 py-3 px-4'><i className="me-3 bi bi-chat-right-dots"></i>Get a Quote<i className="ms-3 bi bi-arrow-right"></i></Link>
                </div>
                
            </section>
            <footer className="">
                
                <div className="bg-dark text-center p-3 p-md-5 rounded-lg site-footer">
                    <div className="text-center mb-3 text-white">
                        <Link className='text-white d-inline-block ' href="/posts/">Blog</Link> |&nbsp;
                        <Link className='text-white d-inline-block ' href="/deals-and-offers/">Offers & Deals</Link> |&nbsp;
                        <Link className='text-white d-inline-block ' href="/how-to-pay/">How to Pay</Link> |&nbsp;
                        <Link className='text-white d-inline-block ' href="/privacy-policy/">Privacy Policy</Link> |&nbsp;
                        <Link className='text-white d-inline-block ' href="/refund-policy/">Refund Policy</Link> |&nbsp;
                        <Link className='text-white d-inline-block ' href="/terms-conditions/">Terms & Conditions</Link>
                    </div>
                    <div  className='text-white'>
                        Copyright &copy; <span id="copyright">{copyright_year()} | All Rights Reserved. Designed with <i className='bi bi-heart-fill small text-danger'></i> by Me</span>							
                    </div>
                    {/*
                    <Image 
                        className="img-dmca" 
                        width={100} 
                        height={200} 
                        src ="https://images.dmca.com/Badges/dmca-badge-w100-5x1-08.png?ID=c74fa459-faa1-4920-9d60-f9e61dcc079d" 
                        alt="DMCA.com Protection Status -"
                    />
                    */}
                </div>    
            </footer>    
        </>
    )
}
function copyright_year(){
    let date = new Date();
    return date.getFullYear();
}