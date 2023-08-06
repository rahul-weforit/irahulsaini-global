

export default function MetaTags({title,description}){

    const Schema = {
        "@context": "https://schema.org/",
        "@type": "Person",
        "name": "Rahul Saini",
        "url": "https://www.irahulsaini.com",
        "image": "/icon.png",
        "sameAs": [
            "https://www.facebook.com/irahulsaini1",
            "https://www.twitter.com/i_rahulsaini",
            "https://www.linkedin.com/in/rahul-saini-648b7711b"
        ],
        "jobTitle": "Website Developer",
        "worksFor": {
            "@type": "Organization",
            "name": "Freelance/Online Work"
        }  
        }
    return (
        <>
            <meta name="twitter:card" content="summary_large_image" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Rahul Saini" />
            <link rel="icon" href="/icon.png" sizes="32x32" />
            <link rel="icon" href="/icon.png" sizes="192x192" />
            <link rel="shortcut icon" href="/icon.png" sizes="192x192" />
            <link rel="apple-touch-icon-precomposed" href="/icon.png" />
            <meta name="msapplication-TileImage" content="/icon.png" />
            
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@i_rahulsaini" />
            <meta name="twitter:creator" content="@i_rahulsaini" />

            <script 
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(Schema) }}
            />
        </>
    )
}