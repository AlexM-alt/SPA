import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Link,Routes, Route} from 'react-router-dom'


const Home = () => <h1>Strona startowa</h1>
const News = () => <h1>Aktualności</h1>
const Contact = () => <h1>Kontakt do nas</h1>

class App extends Component {
  render(){
    return (
      <Router>
        <div >
          <header>
            <nav>
              <ul>
                {/* <li><a href="/">Start</a></li>
                <li><a href="/news">Aktualności</a></li>
                <li><a href="/contact">Kontakt</a></li> */}
                <li><Link to="/">Start</Link></li>
                <li><Link to="/news">Aktualności</Link></li>
                <li><Link to="/contact">Kontakt</Link></li>
              </ul>
            </nav>
          </header>
          <section>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/news" element={<News/>}/>
              <Route path="/contact" element={<Contact/>}/>
            </Routes>
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
