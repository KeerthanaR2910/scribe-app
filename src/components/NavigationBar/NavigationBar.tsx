import "./NavigationBar.css"
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import BookOnlineOutlinedIcon from '@mui/icons-material/BookOnlineOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';

type Props = { onRaiseEventClick: () => void; }
const NavigationBar = ({onRaiseEventClick}: Props) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav flex-column vertical-nav">
                        <li className="nav-item">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <button className="nav-link button" onClick={() => {
                                console.log("clkicked")
                            }}><GridViewOutlinedIcon/><span className={"pad-left"}>Dashboard</span></button>
                        </li>
                        <li className="nav-item">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <button className="nav-link button" onClick={() => {
                                console.log("clkicked")
                            }}>
                                <BookOnlineOutlinedIcon/><span className={"pad-left"}>Book Scribe</span></button>
                        </li>
                        <li className="nav-item">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <button className="nav-link button">
                                <PersonOutlineOutlinedIcon/><span className={"pad-left"}>Manage Booking</span></button>
                        </li>
                        <li className="nav-item">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <button className="nav-link button" onClick={() => {
                                console.log("clkicked")
                            }}><EventNoteOutlinedIcon/><span className={"pad-left"}>My Scribes</span></button>
                        </li>
                        <li className="nav-item">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <button className="nav-link button" onClick={onRaiseEventClick}><CalendarMonthOutlinedIcon/><span
                                className={"pad-left"}>Raise Event</span></button>
                        </li>
                    </ul>
       </div>
       </nav>
       </>
   )
}

export default NavigationBar