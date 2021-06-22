//1.The main elements of a website header usually include:
//Logo or brand identifier
//Large Screen no larger than 320px wide, and 70–100px high. 
//Most mobile devices are typically between 320px and 500px wide,

//Navigational links and menus
//Hidden Navigation - Hidden navigation is when navigational links appear on click or hover.
//A popular hidden navigation solution is the hamburger button or collapsed menu icon.It consists of horizontal lines that represent the menu. Another popular hidden navigation method is the use of drop - down menus.
//Social Media buttons
//Contact information
//Language options
//Search field
//Call To Action Buttons
//Login field
//Shopping Cart
//Notifications

//2.We need to consider header css as follows:
//Font
//Colors
//Padding - Whitespace between elements helps visitors take in the information faster. Elements placed close to each other give the idea that they are related.
//Alignment
//Margin


//3.We need to consider header effects as follows:
//Parallax Effects
//Fixed or Sticky Header
//visible or invisible or transparent when scrolling window,or scrolling window to a position
//responsive css for different devices (PC,Pad,Mobile)
//switch menu icon according to the window size.


//4. Goog Examples Header Design:
//https://awakeboards.com/

import React, { useState, useEffect } from 'react';
import './Header.css'
function Header() {
 const [headerUpperVisible, setHeaderUpperVisible] = useState(false);
 const [headerMiddleVisible, setHeaderMiddleVisible] = useState(false);
 const [headerLowerVisible, setHeaderLowerVisible] = useState(false);

 useEffect(() => {
  setHeaderMiddleVisible(true);
 }, []);


 return (
  <section id="header">
   {
    headerUpperVisible &&
    <div id="header-upper">
     Hello header upper
    </div>
   }
   {
    headerMiddleVisible &&
    <div id="header-middle">
     Hello header middle
    </div>
   }

   {
    headerLowerVisible &&
    <div id="header-lower">
     Hello header lower
    </div>
   }

  </section>

 )
}

export default Header
