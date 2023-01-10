import img from './countries.png'; 

console.log(img); 


const Footer = () => {
    return ( 
        <div className='Footer'>
                <h1>Earn Up to $7 worth of crypto</h1>
                <p>Discover how specific cryptocurrencies work — and get a bit of each crypto to try out for yourself.</p>
                <button className="btn btn-primary">Start erning</button>
               <img src={img} alt="img" className='countries'/>
        </div>

     );
}
 
export default Footer;