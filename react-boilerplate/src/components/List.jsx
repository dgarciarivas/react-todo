import React from 'react';

 const List = (props) => {
            return (
                    <div className="List">
                         <ul  > 
                                <a href={props.url}>{
                                    props.name
                                }</a>
                        </ul>
                    <button className="button" onClick={() => props.removeItem(props.index)}>x</button>

                </div>
            )
    }  

    export default List;