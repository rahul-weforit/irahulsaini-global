import Link from 'next/link'
export function Breadcrumb({title,crumbs}){
    return (
        <section className="jumbotron py-5 bg-light">
            <div className="container pt-5">
                <h1 className="display-6 text-primary">{title}</h1>

                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        {
                            crumbs.map((element,index, items) => {
                                return (
                                    <li key={index} className={`breadcrumb-item ${index == items.length-1 ? 'active':''}`}>
                                        {index == items.length-1 ? element.title : <Link href={element.link}>{element.title}</Link>}
                                        
                                    </li>
                                )
                            })
                        }
                    </ol>
                </nav>
            </div>
        </section>
    )
}