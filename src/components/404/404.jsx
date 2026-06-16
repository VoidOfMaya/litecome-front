import { Link } from "react-router-dom"

const NotFound =()=>{
    return(
        <div>
            Error:404.oops, page not found 
            <p> if page isnt redirected to home,<Link to={'/'}> click here</Link></p>
        </div>
    )
}
export{
    NotFound
}