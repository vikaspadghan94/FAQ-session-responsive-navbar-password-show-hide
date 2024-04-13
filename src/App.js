import logo from "./logo.svg";
import "./App.css";
import btnModule from "./Button.Module.css";
import 'react-notifications/lib/notifications.css';
import { useState } from "react";
import { questions } from "./Data/faqQuetions";
import Faqs from "./Faqs";
import {NotificationContainer, NotificationManager} from "react-notifications"
import { tabs } from "./tabs";

function App() {

  let [activeTabs, setactiveTabs] = useState(0)
  let [activeContent, setactiveContent] = useState(tabs[0])

  let changeData=(index)=>{
    // alert(index)
    setactiveTabs(index)
    setactiveContent(tabs[index])
  }

  let [showAns, setShowAns] = useState(questions[0].qno)
  let [status, setStats] = useState(false);
  let [pstatus, setPstatus] = useState(false);
  let [menustatus, setMenustatus] = useState(false);

  let [modalstatus, setModalstatus] = useState(false);
let n = ['ram', 'ravi', 'raj', 'sudhir']
let showNotification =() => {
  NotificationManager.info("Contact us for more details")
  // NotificationManager.success('Success message', 'Title here');
  // NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
  // NotificationManager.error('Error message', 'Click me!')



}
  return (
    <div className="App">


<div className="tabsOuter">
<h1 className="heading" style={{textAlign:'left'}}>
  Law Prep Vision Mission and Values
</h1>
<ul>
  {tabs.map((tabsItems, index) => {
    return(
<li>
    <button onClick= {()=> changeData(index)} className={activeTabs== index ? 'acticeButton' : ''}>{tabsItems.title}</button>
  </li>
    )
  })}
  
  
</ul>
{activeContent!== undefined ? 
<p>
  {activeContent.description}
</p> 
:
''
}

</div>


      <NotificationContainer/>
      {/* <div>
   <h1>
     Frequently Asked Questions (FAQs)
   </h1>
   <div className='faqouter'>
     {
    questions.map((faqItem, i) => {
       return (
         <div className='faqItems' key={i}>
           <h2 onClick={() => setShowAns(faqItem.qno)}>{faqItem.question}</h2>
           <p className={showAns==faqItem.qno ? 'activeAns' : ''}>{faqItem.answer}</p>
         </div>
       );
     })}
   </div>
</div> */}
      <button className="en" onClick={() => setModalstatus(true)}>
        Enquiry Now
      </button>
      <div
        onClick={() => setModalstatus(false)}
        className={`modalOverLay ${modalstatus ? "modalshow" : ""} `}
      >
        <div className={`ModalDiv ${modalstatus ? "showModalshow" : ""} `}>
          <h3>
            Enquiry Now <span className="closebtn">&times;</span>
          </h3>
        </div>
      </div>
      <button className="micon" onClick={() => setMenustatus(!menustatus)}>
        {menustatus ? <span>&times;</span> : <span>&#9776;</span>}
      </button>
      <div className={`menu ${menustatus ? "activeMenu" : ""}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Gallary</li>
          <li>Courses</li>
          <li>Contact</li>
        </ul>
      </div>
      <input type={pstatus ? "text" : "password"} />{" "}
      <button onClick={() => setPstatus(!pstatus)}>
        {pstatus ? "hide" : "show"}
      </button>
      <br />
      <br />
      <button className="error">Error</button>
      <button className="warning">Demo</button>
      <button onClick={() => setStats(!status)}>
        {status ? "hide" : "Click here"}
      </button>
      {status ? <p className="para">Welcome to StateHandeling</p> : ""}
      <div>
        <Faqs />
      </div>
      <div>
      
      <button onClick={showNotification}>Get More</button>
      </div>
    </div>
  );
}

export default App;
