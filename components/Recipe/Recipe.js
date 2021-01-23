import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Link from 'next/link';


export default function Recipe(props){
    return(
        <div>
            <Header title={`Capela MasterChef - ${props.name}`} />
            <main>
                
                <article class="recipe-body" >
                    <h1 className="recipe-body-name" >{props.name}</h1>

                    <img className="recipe-body-picture" alt={props.name} src={props.picture} />

                    <div>
                        <i className="fas fa-stopwatch fa-fw" ></i> Preparo: {props.time} <br />
                        <i className="fas fa-utensils fa-fw" ></i> Rendimento: {props.servings}
                    </div>                    

                    {props.children}

                </article>
                <div className="container-btn">
                    <Link href="/">
                        <a className="home-btn">Home</a>
                    </Link>
                </div>
            </main>
            <Footer/>
        </div>
    )
}