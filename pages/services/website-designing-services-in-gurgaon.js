import Layout from '../layout'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import {Accordion} from '../../components/card'
import { Breadcrumb } from '../../components/Breadcrumb'
import 'bootstrap-icons/font/bootstrap-icons.css'


export default function Home(){
    const meta_title = 'Best Web Designing Company Gurgaon | Web Services Agency';
    const meta_desc = 'We are a Web Designing Company in Gurgaon. We believe that every business deserves a website that is easy to use but also effective at meeting their goals.';
    const og_image = '';
    const crumbs = [
        {
            title:'Services',
            link:'/services/'
        },
        {
            title:'Best Web Designing Company Gurgaon',
            link:'/services/website-designing-services-in-gurgaon/'
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
                title="Web Designing"
                crumbs={crumbs}
            />

            <section className="bg-white py-5">
                <div className="container">
                    <h2 className="h3 text-primary">Create your Best Story with Best Website Designing Services in Gurgaon</h2>
                    <p>Designing a captivating websites can sometimes become a hard task. This is where our years of proficiency and strong understanding of user habits and behaviours comes in handy to design websites that are remunerative. In this digital world your online presence is your business front and also a gateway to interminable scalability.</p>
                    <p>Website is the initial point of contact with your online presence so it has to be professional and well contemplate your brand vision, mission and values.</p>
                    <p>As a <strong>top web designer in Gurgaon</strong>, I merge design and technologies to assist brands achieve their defined goal in this ever changing digital era. I am committed of utilizing fact-based knowledge and unique brand of innovation to help you to dominate the competition.</p>
                </div>
            </section>  
            <section className="bg-light py-5">
                <div className="container">
                    <h2 className="h3 text-primary">Get your target prospects by Best Website Designing Services in Gurgaon</h2>
                    <p>Designing a captivating websites can sometimes become a hard task. This is where our years of proficiency and strong understanding of user habits and behaviours comes in handy to design websites that are remunerative. In this digital world your online presence is your business front and also a gateway to interminable scalability.</p>
                    <p>Website is the initial point of contact with your online presence so it has to be professional and well contemplate your brand vision, mission and values.</p>
                    <p>As a <strong>top web designer in Gurgaon</strong>, I merge design and technologies to assist brands achieve their defined goal in this ever changing digital era. I am committed of utilizing fact-based knowledge and unique brand of innovation to help you to dominate the competition.</p>
                </div>
            </section>  
            <section className="bg-white py-5">
                <div className="container">
                    <div className="accordion" id="more-services">



                        <Accordion
                            heading="Static Web Designing v/s Dynamic Web Designing"
                            id="service1"
                            parent="more-services"
                            show="1"
                            content='<p>A static website contains fixed content Web pages. Each page displays the same information to every visitor and coded in HTML. It is the most simple and effortless way to create. Static website is very useful for extending market of services with its information and appearance on Internet. I design each website exceptionally with custom static web design for you. Never use website templates; instead build a unique website design based solely upon your design and functionality requirements. Our static web page design procedure is business focused and more professional.</p>'
                        />
                        
                        
                        <Accordion
                            heading="Dynamic Web Designing"
                            id="service2"
                            parent="more-services"
                            content="<p>I hold a wide experience in designing and development of dynamic website as per the customer's specific requirements. With high experienced and dedication able to develop a site that fulfils all aspects of your business and strategy. These websites are facile to navigate, fast in loading, easy to use with high tech experience, compatible, cross browser. Dynamic sites allow easy modification of content, videos or images and database orientation without depending on the webmaster. In current market scenario every business requires to possess a strong web presence in order to captivate visitors. </p>"
                        />
                        
                        
                        <Accordion
                            heading="Responsive Website"
                            id="service3"
                            parent="more-services"
                            content="<p>In the world there are a host of systems available through which a person can access the net these days. So create website need to be adapted by each of these devices, thus a different version of website is required for laptops and desktops. Further one need separate version for android mobile phones and again one more for iOS mobiles. Therefore, to resolve these kinds of issues responsive web designing is done.</p><p>As one of the<strong> top Website Designing Services in Gurgaon</strong>, website is designed on the responsive web design template and added with required creativity to make it more appealing. As an expert <strong>Responsive website designing services in Gurgaon</strong>, contain high experience and able to understand the market requirements to deliver better results. The interactive interface and user-friendly navigation will definitely add more stars to your website.&nbsp;&nbsp;</p>"
                        />
                        
                        <Accordion
                            heading="Website Redesigning"
                            id="service4"
                            parent="more-services"
                            content="<p>Website Redesigning process is comprises of three steps analysis of website, client interaction and redesign process. In first step complete 360 degree analysis of website is done considering every aspect. After evaluating the advantage and disadvantage of current website, next step is to understand the requirement of clients. After getting the expectation of clients actual redesigning process takes places. Website redesigning helps to increase conversion rate, mobile optimization and remove obsolete content which ultimately support SEO.   </p>"
                        />
                        
                        
                        <Accordion
                            heading="Create most appealing eCommerce Website"
                            id="service5"
                            parent="more-services"
                            content="<p>In current era, many people especially the youth are attracting towards online purchase. Constant rise in demand of online platform eCommerce has become an important business platform as all kinds of services and products are available for respective users. As per Analytical report eCommerce market in India is expected to hit $32.7 billion and collectively the industry is expected to grow with worth $71.94 billion by 2022. Due to this reason, every business house whether big or small are moving towards online platform to mark its online presence which will increase the sales volume. As one of the leading <strong>web development services in Gurgaon</strong>, I offer SEO friendly and mobile responsive eCommerce website with add to cart, single or multi vendor control, payment gateway, shopping cart, , SSL certificate and location wise promotion on search engine to get online sale of your products and services.</p>"
                        />
                        <Accordion
                            heading="Mobile Website Designing"
                            id="service6"
                            parent="more-services"
                            content="<p>Technology has gain ground into each one of our lives. With the outset of the technological revolution, gadgets have become a common sight. The one thing that has grown very fast and bounds is the mobile industry. Also after the heralding in of 3G era, the use of mobile phones increased from merely calling and messaging to using internet too. As internet becomes progressively accessible on mobile phones, there is an ever enhancing requirement to create websites and pages that are supportive for handheld devices like phones and tablets.</p>"
                            
                        />
                        <Accordion
                            heading={`Top web Development services in Gurgaon`}
                            id="service7"
                            parent="more-services"
                            content="<p>Being the <strong>Best Web Development services in Gurgaon</strong>, right efforts make your project a success not from arranging the newest buzzwords and spin statistics. The real Web Development services can make your brand and your business grow through captivating website. Defined strategies are developed from experience, data-driven and designed to get real as well as organic results over time that rise in long run.</p><p>Your website is not just a well-worded idword filler and collection of images; it&rsquo;s much more than that. Website is the hub of your digital existence and your online presence. So, you are required to build your website by the <strong>best Web Development services in Gurgaon</strong> who is passionate about work and provide you customized <strong>web Designing and development services</strong> at affordable packages in India.</p>"
                        />
                        
                        
                        
                        
                        
                    </div>                    
                </div>
            </section>  
               
        </Layout>
    )
}
