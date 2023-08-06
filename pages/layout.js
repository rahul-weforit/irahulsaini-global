import Header from '../components/header';
import Head from 'next/head';
import Footer from '../components/footer';
import MetaTags from '../components/MetaTags';
export default function Layout({ children }) {
    
    return <>
        <Head>
            <MetaTags/>
            
            
        </Head>
        <Header/>
        {children}
        <Footer/>
    </>;
}