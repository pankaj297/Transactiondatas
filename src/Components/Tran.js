import React from 'react';

const Tran = ({ menudata }) => {
  return (
    <>
      <section>
        {menudata.map((curElem) => {
          const {id, date, amount, fees} = curElem;

          return (
            <>
              <div className='sc'>
                <div className="hhh" key={curElem}>
                  <div className="id1 p-2 text-primary">{id}</div>
                  <div className="id2 p-2">{date}</div>
                  <div className="id3 p-2">{amount}</div>
                  <div className="id4 p-2">{fees}</div>
                </div>
                <hr className="hrr" />
              </div>
              
            </>
          );
        })}
        
      </section>
      
    </>
  );
};

export default Tran;
