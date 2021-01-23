import Link from 'next/link';
import Head from 'next/head';

export default function Header(props){
    return(
        <header className="header" >
            <Head>
                <title>{props.title}</title>
                <link rel="stylesheet" href="/styles/page.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
            </Head>
            <Link href="/" >
                <a><h1 id="header-title"><i class="fas fa-utensils"></i> Capela MasterChef</h1></a>
            </Link>
        </header>
    )
}