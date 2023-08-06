
import Link from 'next/link'
import Image from 'next/image'

export function Industry({index, cls, title, icon}){
    return (
        <div key={index} className="col-6 col-md-3 py-3">
            <div className={`alert mb-0 px-2 py-2 px-md-4 py-md-4 ${cls} text-center rs-card rs-industries rounded-lg shadow-sm h-100`}>
                <div className="icon"><i className={`${ icon } d-inline-block h4   `}/></div>
                <p className="mb-0 small text-center">{title}</p>
            </div>
        </div>
    )
}
export function Feature({index, cls, title, content, icon}){
    return (
        <div className="col-8 col-sm-4 col-md-4 col-xl-3 py-4">
            <div className={`rs-features ${cls?cls:''} alert alert-primary rs-card bg-transparent rs-card text-center px-3 py-3 py-md-4 h-100 shadow-sm`}>
                <div className="icon mx-auto d-block mb-2">
                    <i className={`${ icon } d-inline-block text-primary bg-light border-primary border px-3 h5 py-3 rounded-circle`}/>
                </div>
                <div className="content">
                    <h6 className="title text-nowrap text-md-wrap text-dark">{ title }</h6>
                    <p className="small text-muted d-none d-md-block mb-0">
                        { content }
                    </p>    
                </div>
            </div>
        </div>
    )
}
export function Service({link,title,icon}){
    return (

        <Link href={link} className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2 py-3  text-decoration-none">
            <div className="rs-service-box bg-light text-center shadow-sm py-4 rs-card px-4 border-bottom border-primary h-100">
                <div className="icon mb-2 mx-auto rotate-flip ">
                    <i className={`p-3 border-primary border h5 rounded-circle text-white d-inline-block bg-primary ${icon}`}></i>
                </div>
                <div className="content">
                    <div className="text-nowrap text-primary text-dark service-title font-weight-bold small">
                        {title}
                        <i className="ms-2 bi bi-arrow-right"></i>
                    </div>
                </div>  
            </div>
        </Link>
    )
}
export function Client({image,title}){
    return (
        <div className="col-3 col-sm-3 col-md">
            <Image 
            className="w-100 rs-client d-flex align-items-center rs-card bg-white shadow-sm my-2" 
            src={image} 
            width={101} 
            height={56}
            alt={title}
            />
        </div>
    )
}
export function Team({name,image,desg}){
    return (
        <div className="col-8 col-sm-6 col-md-4 col-lg-3">
            <div className="rs-team bg-light rounded-lg px-3 py-3 text-center shadow-sm border-bottom border-primary h-100">
                <div className="rs-team-image text-center">
                    <Image 
                        src={image} 
                        className="rounded-circle w-75" 
                        alt={name} 
                        title={name}
                        width={100}
                        height={100}

                        />
                </div>
                <div className="details py-3">
                    <h5 className="font-weight-bold mb-1">{name}</h5>
                    <p className="text-center small text-muted mb-0">{desg}</p>
                </div>
            </div>
        </div>        
    )
}
export function Accordion({heading,content,id,parent, show}){
    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className={`accordion-button ${show?'':'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#${id}`} aria-expanded="true" aria-controls={id}>
                {heading}
                </button>
            </h2>
            <div id={id} className={`accordion-collapse collapse ${show?'show':''}`} data-bs-parent={parent}>
                <div className="accordion-body"
                    dangerouslySetInnerHTML={{ __html: content }}
                >
                    
                    
                </div>
            </div>
        </div>
    )
}