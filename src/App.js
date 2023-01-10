import Navbar from './Navbar';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';

// import { ReactComponent as Logo } from '../public/images/logo.png';
function App() {
  const title="welcome";
  return (
    <div classNameName="App">
      <Navbar/>
      {/* <Logo/> */}
      <div classNameName="Header">
      <Header/>
      </div>
      <div classNameName="Content">
        <Home/>
      </div>
      <div classNameName="Footer">
        <Footer/>
      </div>
    </div>
  );

}
export default App;
