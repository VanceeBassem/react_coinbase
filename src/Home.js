import img from './coinbase.png'; 

console.log(img); 
const Home = () => {
    return (   
<div className='Home'>
    <div className="section1">
        <h1>Create your cryptocurrency portfolio today</h1>
        <h6>Coinbase has a variety of features that make it the best place to start trading</h6>
        <div className="boxe1">
            <h1><i className="fa fa-line-chart mx-2" aria-hidden="true" style={{backgroundColor: "white",boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.25)",color:"#0075FF"}}></i>Manage your portfilio</h1>
            <p className='mt-2'>Buy and sell popular digital currencies, keep track of them in the one place.</p>
        </div>
        <div className="boxe2">
            <h1><i className="fa fa-calendar-o mx-2" aria-hidden="true" style={{backgroundColor: "white",boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.25)",color:"#0075FF"}}></i>Manage your portfilio</h1>
            <p className='mt-2'>Buy and sell popular digital currencies, keep track of them in the one place.</p>
        </div>
        <div className="boxe3">
            <h1><i className="fa fa-mobile mx-2" aria-hidden="true" style={{backgroundColor: "white",boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.25)",color:"#0075FF"}}></i>Manage your portfilio</h1>
            <p className='mt-2'>Buy and sell popular digital currencies, keep track of them in the one place.</p>
        </div>
        <div className="col-6">
            <img src={img} alt="img" className='coinbase'/>
        </div>
    </div>
    <hr/>
    <div className="section2">
        <h1>The most trusted cryptocurrency platform </h1>
        <h6>Here are a few reasons why you should choose Coin</h6>
        <div className="group4">
            <i class="fa fa-eye fa-5x" aria-hidden="true"></i>
            <h1>Secure storage</h1>
            <p>We store the vast majority of the digital assets in secure offline storage.</p>
        </div>
        <div className="group5">
            <i class="fa fa-envelope fa-5x" aria-hidden="true"></i>
            <h1>Protected by insurance</h1>
            <p>Coinbase maintains crypto insurance and all USD cash balances are covered by FDIC insurance, up to a maximum of $250,000.</p>
        </div>
        <div className="group6">
            <i class="fa fa-shield fa-5x" aria-hidden="true"></i>
            <h1>Industry best practices</h1>
            <p>Coinbase supports a variety of the most popular digital currencies.</p>
        </div>
    </div>
    <div className="section3" style={{backgroundColor: "blue"}}>
       <div className="group7">
            <h1>$547B</h1>
            <p>Quarterly volume traded</p>
        </div>
        <div className="group8">
            <h1>100+</h1>
            <p>Quarterly volume traded</p>
        </div>
        <div className="group9">
            <h1>89+M</h1>
            <p>Quarterly volume traded</p>
        </div>
    </div>
    <div className="section4">
        <h1>Get started in a few minutes</h1>
        <h6>Coinbase supports a variety of the most popular digital currencies.</h6>
        <div className="group10">
        <i class="fa fa-user-plus fa-5x" aria-hidden="true"></i>
            <p>Create an account</p>
            <hr/>

        </div>
        <div className="group11">
            <i class="fa fa-building fa-5x" aria-hidden="true"></i>
            <p>Create an account</p>
            <hr/>
        </div>

        <div className="group12">
            <i class="fa fa-usd fa-5x" aria-hidden="true"></i>
            <p>Create an account</p>
        </div>
    </div>
    
</div>

);
}
 
export default Home;