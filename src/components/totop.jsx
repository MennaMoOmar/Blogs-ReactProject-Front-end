import React, {useState} from "react";

import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const Totop = () => {

    const [visible, setVisible] = useState(false)
  
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
           in place of 'smooth' */
      });
    };
    
    window.addEventListener('scroll', toggleVisible);

    return ( 
        <React.Fragment>
            <div className="totop" onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}>
                <ExpandLessIcon className="totop__arrow"></ExpandLessIcon>
            </div>
        </React.Fragment>
    );
}
 
export default Totop;