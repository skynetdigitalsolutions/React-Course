import {Header} from '../components/Header'
import {Link} from 'react-router'
import './errorpage.css'

export function ErrorPage(){
    return(
        <>
        <Header/>
        <div className="error-message">
            <h1>404: Page Not Found</h1>
            <h3>Please Go To <Link to='/'>Home</Link> </h3>
        </div>
        </>
    )
}