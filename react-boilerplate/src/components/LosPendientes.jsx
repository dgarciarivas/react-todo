import React from 'react';
import PendienteInput from './PendienteInput.jsx'



    const LosPendientes = (props) => {
            return(
                    <div className = "elPendiente">
                        <div className="ListHeader">
                      
                             <ul style={props.style} > 
                                  {
                                      props.name
                                  }
                             </ul>
                             <button className="buttonListName" onClick={() => {props.removeItem(props.index); console.log('props when onclick is called',props)}}>x</button>
                        </div>

                        <PendienteInput className = "PendienteInput" listName= {props.name} removeItem = {props.removeItem} index = {props.index} />
                    </div>
                )
        }

 
export default LosPendientes;

  