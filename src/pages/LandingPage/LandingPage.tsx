import NavigationBar from "../../components/NavigationBar";
import Header from "../../components/Header";
import {useState} from "react";
import RaiseEvent from "../../components/RaiseEvent";

const LandingPage = () => {
    const [raiseEventOpen, setRaiseEventOpen]=useState<boolean>(false);
  return (
      <div>
          <Header/>
          <NavigationBar onRaiseEventClick={() => setRaiseEventOpen(true)}/>
          {raiseEventOpen && <RaiseEvent/>}
      </div>
  )
}

export default LandingPage