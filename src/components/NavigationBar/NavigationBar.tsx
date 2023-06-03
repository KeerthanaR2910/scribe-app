import "./NavigationBar.css"

const NavigationBar = () => {
   return(
       <>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
           {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
           </button>

           <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav mr-auto flex-column vertical-nav">
                   <li className="nav-item">
                       {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                       <a className="nav-link" href="#">Dashboard</a>
                   </li>
                   <li className="nav-item">
                       {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                       <a className="nav-link" href="#">Pages</a>
                   </li>
                   <li className="nav-item">
                       {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                       <a className="nav-link" href="#">Link</a>
                   </li>
               <li className="nav-item">
                   {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                   <a className="nav-link" href="#">Another Link</a>
               </li>
               <li className="nav-item">
                   {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                   <a className="nav-link" href="#">Setting</a>
               </li>
           </ul>

       </div>
       </nav>
       </>
   )
}

export default NavigationBar