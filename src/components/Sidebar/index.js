// import {Link} from 'react-router-dom'
// import './index.css'

// const Sidebar = () => {
//     return(
//         <>
//         <ul className = "sidebar-con">
//             <Link to = "/"><li>Home</li></Link>
//             <Link to = "/account">Account</Link>
//             <Link to = "/about">About</Link>
//             <Link to = "/project">Project</Link>
//         </ul>
//         </>
//     )
// }

// export default Sidebar

import { FaHome,FaRegUser } from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";
import { CiCircleQuestion } from "react-icons/ci";
import { Link } from 'react-router-dom';
import './index.css'


const Sidebar = () => {
    return(
        <div className = "sidebar-con">
            {/* <div className = "logo-con">
                <img src = "" alt = "logo" className = "logo"/>
            </div> */}
            {/* <div className = "list-item"> <FaHome /> Home </div> */}
            {/* <hr className = "hr-line"/> */}
        <ul className = "list-con">
            <Link to = "/" className = "link-item"><li className="list-item"> <FaHome /> Home </li></Link>
            <Link to = "/Account" className = "link-item"><li className = "list-item"> <FaRegUser /> Account </li></Link>
            <Link to = "/Project" className = "link-item"><li className = "list-item"> <AiOutlineStock/> Attribution Chart </li></Link>
            <Link to = "/about" className = "link-item"><li className = "list-item"> <CiCircleQuestion/> About </li></Link>
        </ul>
        </div>
    )
}

export default Sidebar