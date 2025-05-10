import { useState } from "react"
import {FaChevronDown} from "react-icons/fa"
import {FaChevronUp} from "react-icons/fa"


const Accordion = () => {
   
  const [carts, setCarts] = useState([]);
  const [accordion, setAccordion] =useState();
  const [accordionb, setAccordionb] =useState();
  const [accordionc, setAccordionc] =useState();
  const [chevron, setChevron] = useState(FaChevronDown);
  const [chevronb, setChevronb] = useState(FaChevronDown);
  const [chevronc, setChevronc] = useState(FaChevronDown);

  const pa = "However i don't like sugary drink and bread related products"


   function displayAccordiona(){
    if(accordion === "" || chevron == FaChevronDown){
      setAccordion(`My favorite food is bugger, french frice and banana, ${pa}`);
      setChevron(FaChevronUp);
    }else{
      setAccordion('');
      setChevron(FaChevronDown);
    } 
   }

    function displayAccordionb(){
    if(accordionb === "" || chevronb == FaChevronDown){
      setAccordionb("My favorite game is basketball, handball and volleyball");
      setChevronb(FaChevronUp);
    }else{
      setAccordionb('');
      setChevronb(FaChevronDown);
    }
   }
   const pc = "Rwanda is a country which is loacted in central africa alongside with DRC, UG and Burundi";

   function displayAccordionc(){
    if(accordionc === "" || chevronc == FaChevronDown){
      setAccordionc(`My favorite country is Rwanda, ${pc}`)
      setChevronc(FaChevronUp);
    }else{
      setAccordionc('');
      setChevronc(FaChevronDown)
    }
   }



  return (
    <div className='container'>
    
    
        <h1 className="tex">Hello dear</h1>
      <div className="accord"> 
      <h1 className="text-success fw-bold">ACCORDION IN REACT WITH BOOTSTRAP</h1>
      <p className="card border border-warning border-4 bg-info">The accordion refer to the techinc of presenting user interface
        frequent asked questions in expanding or collapse manner so that the answer and hide it
        for himself.
      </p>
 
      <div className="bg-warning" id="accordionlist">
      <div className="accordion">
      <h4 className="text-accordion" onClick={() => displayAccordiona()}>What is your foavorite food?{chevron}</h4>
      <p className="text-secondary fw-bold">{accordion}</p>
      </div>
      <div className="accordion">
      <h4 className="text-accordion" onClick={displayAccordionb}>What is your foavorite game?{chevronb}</h4>
      <p className="text-secondary fw-bold">{accordionb}</p>
      </div>
       
      <div className="accordion">
      <h4 className="text-accordion" onClick={displayAccordionc}>What is your foavorite country?{chevronc}</h4>
      <p className="text-secondary fw-bold">{accordionc}</p>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Accordion

