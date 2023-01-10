import img from './coinbasewallet.png'; 

console.log(img); // /logo.84287d09.png


const Header = () => {
    return ( 
        <div className='Header'>
            <div className="col-4">
                <a>Jump start your portfolio<i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                <h1>Jump start your crypto portfolio</h1>
                <p>Coinbase us the easiest place to buy and sell cryptocurrency. Sign up and get started today</p>
                <input type="text" placeholder="Email address"></input>
                <button className="btn btn-primary">Get started</button>
            </div>
            <div className="col-8">
               <img src={img} alt="img" className='coinbasewallet'/>
            </div>
        </div>

     );
}
 
export default Header;