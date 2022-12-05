import './App.css';

function App() {
  return (
    <div className="header">
    <div className="header-content">
    <div>
        <img className="company-logo" src="../assests/images/company logo.png" alt="sample-logo" width="100x" height="50px"></img>
    </div>
    <div>
        <ul className="header-unorder">
            <li><a href="_self">Home</a></li>
            <li><a href="self">Categories</a></li>
            <li><a href="self">Services</a></li>
        </ul>
    </div>
    <div>
        <input id="search-bar" type="text" placeholder="Search for services near you"></input>
    </div>
    <div>
        <a className="service-man--register" href="self">Become a Service man</a>
    </div>
    <div>
        <ul className="header-unorder">
            <li><a href="self"><i className="fa-solid fa-bell"></i></a></li>
            <li><a href="self"><i className="fa-solid fa-crown"></i></a></li>
            <li><a href="self"><i className="fa-solid fa-cart-plus"></i></a></li>
            <li><a href="self"><i className="fa-solid fa-list-ul"></i></a></li>
        </ul>
    </div>
    <div>
        <button className="sign-in--buttton">Sign In</button>
    </div>
</div>
</div>
  );
}

export default App;
