import React, { useState } from "react";
import { questions } from "./Data/faqQuetions";


function Faqs() {
    let [currentQno, setCurrentQno] = useState(questions[0].qno)
    let items= questions.map((itemsData, i) => {

        let itemDetails = {
            itemsData,
            currentQno,
            setCurrentQno
        }

        return(
            <FaqItems key={i} itemDetails= {itemDetails} />
        )
    })
  return (
    <div>
      <h1>Frequently Asked Questions (FAQs)</h1>
      <div className="faqouter">
    {items}
      </div>
    </div>
  );
}

export default Faqs;

function FaqItems({itemDetails}){

    let{currentQno,setCurrentQno,itemsData} = itemDetails
    return(
        <div className='faqItems'>
        <h2 onClick={() => setCurrentQno(itemsData.qno)}> {itemDetails.itemsData.question}</h2>
       <p className= {currentQno=== itemDetails.itemsData.qno ? 'activeAns' : ''}> {itemDetails.itemsData.answer}</p>
    </div>
    )
}