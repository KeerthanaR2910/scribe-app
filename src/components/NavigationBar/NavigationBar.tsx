import "./NavigationBar.css"
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import BookOnlineOutlinedIcon from '@mui/icons-material/BookOnlineOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';


const NavigationBar = () => {
   return(
       <>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
           {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
           </button>

           <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav flex-column vertical-nav">
                   <li className="nav-item">
                       {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                       <a className="nav-link" href="#">
                       <GridViewOutlinedIcon/><span className={"pad-left"}>Dashboard</span></a>
                   </li>
                   <li className="nav-item">
                       {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                       <a className="nav-link" href="#">
                       <BookOnlineOutlinedIcon/><span className={"pad-left"}>Book Scribe</span></a>
                   </li>
                   <li className="nav-item">
                       {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                       <a className="nav-link" href="#">
                       <PersonOutlineOutlinedIcon/><span className={"pad-left"}>Manage Booking</span></a>
                   </li>
               <li className="nav-item">
                   {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                   <a className="nav-link" href="#">
                   <EventNoteOutlinedIcon/><span className={"pad-left"}>My Scribes</span></a>
               </li>
               <li className="nav-item">
                   {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                   <a className="nav-link" href="#">
                   <CalendarMonthOutlinedIcon/><span className={"pad-left"}>Raise Event</span></a>
               </li>
           </ul>
       </div>
       </nav>
       </>
   )
}

export default NavigationBar