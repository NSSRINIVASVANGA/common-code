import {Routes,Route} from 'react-router-dom'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import About from '../About'
import Account from '../Account'
import Project from '../Project'
import Extra from '../Extra'
import './index.css'

const Home = () => {
    return(
        <div className = "home-con">
            <Navbar/>
            <div className = "main-con">
                <Sidebar/>
            <div className = "content-con">
            <Routes>
                <Route exact path = "/" element = {<Extra/>}/>
                <Route exact path = "/about" element = {<About/>}/>
                <Route exact path = "/account" element = {<Account/>}/>
                <Route exact path = "/project" element = {<Project/>}/>
            </Routes>
            </div>
            </div>
        </div>
    )
}

export default Home