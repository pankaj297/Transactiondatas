import styled from '@emotion/styled';
import {numlist,  buttonBaseClasses } from '@mui/material';
import React, {useEffect, useState} from 'react';




 const Footer = ({
   filterItems,
   numlist,
   currentPage,
   setCurrentPage,
 }) => {

   const [isFirstRender, setIsFirstRender] = useState(true);

   useEffect(() => {
     if (isFirstRender) {
       // Set the default value here
       const defaultValue = 1;
       filterItems(defaultValue);
       setIsFirstRender(false);
       const ActiveButton = styled.button`
         background-color: #007bff;
         color: green;
       `;
     }
   }, [filterItems, isFirstRender]);

   const handlePreviousClick = () => {
     if (currentPage >= 1) {
       setCurrentPage(currentPage - 1);
       filterItems(currentPage - 1);
     }
   };

   const handleNextClick = () => {
     if (currentPage < numlist.length) {
       setCurrentPage(currentPage + 1);
       filterItems(currentPage + 1);
     }
   };

   return (
     <>
       <div
         class="btn-toolbar mb-3"
         role="toolbar"
         aria-label="Toolbar with button groups"
       >
         <div class="fbtn btn-group me-2" role="group" aria-label="First group">
           <button
             type="button"
             class="Previous"
             onClick={handlePreviousClick}
             disabled={currentPage === 1}
           >
             Previous
           </button>
           {numlist.map((curElem) => {
             return (
               <button
                 type="button"
                 key={curElem}
                 class={`pk  ${currentPage === curElem ? "active" : ""}`}
                 onClick={() => filterItems(curElem)}
               >
                 {curElem}
               </button>
             );
           })}
           <button
          
             type="button"
             class="Next"
             onClick={handleNextClick}
             disabled={currentPage === numlist.length}
           >
             Next
           </button>
         </div>
       </div>
     </>
   );
 };

export default Footer;



// ${currentPage === numlist.length ? "active" : ""}`