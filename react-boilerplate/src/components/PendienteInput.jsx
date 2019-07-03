import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';


class PendienteInput extends React.Component{
             constructor(){
                    super();
                    var storage = window.localStorage.storage;
                    console.log(storage, "this is the variable storage which should be everything stored locally, the call is window.localStorage.storage")
                    console.log('initializing pendiente list');
                    console.log(this);
                      this.state={
                        pendienteList: [],
                        newpendientetxt: undefined,
                     } 
                     
                    
                    this.onChangePen = this.onChangePen.bind(this);
                    this.removeItemPen = this.removeItemPen.bind(this);
                    this.onSubmitPen = this.onSubmitPen.bind(this);
                    this.handleOnSubmitPen = this.handleOnSubmitPen.bind(this);
                  
                  }             
                onChangePen = (event) =>{
                    this.setState({newpendientetxt: event.target.value});
                }

               onSubmitPen = (event)=>{
                event.preventDefault();
                console.log('PendienteInput.onSubmitPen start')
                console.log(this.props)
                if(this.state.newpendientetxt == undefined || this.state.newpendientetxt === ' ' || this.state.newpendientetxt === '' ){
                    alert("Please enter a value");
                }
                else{
                    var addition = this.state.newpendientetxt;
                    console.log('i want to add:',addition);
                    this.setState({
                        newpendientetxt: '',
                        pendienteList: [...this.state.pendienteList, addition]
                    });
                }
                let retrieve = JSON.parse(window.localStorage.getItem('storage'));
                console.log('I currently have:',retrieve[this.props.listName]);
                retrieve[this.props.listName] = [...retrieve[this.props.listName], addition];
                console.log('Need to save new list: ', retrieve);
                window.localStorage.setItem('storage', JSON.stringify(retrieve));
                console.log('PendienteInput.onSubmitPen end');

                }
              handleOnSubmitPen(list, copy){
              console.log('handleNewPendiente() start');
              if(copy.length > list.length) {
                    console.log('A pendiente was added named:');
                    //create a new list with initial values
                    var addition = copy[(copy.length -1)];
                    console.log(addition);
                    console.log('copy', copy)
                    window.localStorage.setItem(`${this.props.name}`, copy);  //it looks like saving a list name is working, need to be able to save the list
              }
              this.onSubmitPen(event);
              console.log('handleNewPende() end');
                 }
            removeItemPen = (index)=> { 
                  console.log("PendienteInput.removeItem start")
                  console.log('index of the item clicked on',index);
                  console.log('grab the stored values', JSON.parse(window.localStorage.storage));
                  let retrieve = JSON.parse(window.localStorage.storage);
                  console.log('I currently have:',retrieve[this.props.listName]);
                  let gone = retrieve[this.props.listName].splice(index, 1);
                  let newList  = retrieve[this.props.listName];
                  console.log('what was removed', gone);
                  console.log('Need to save new list: ', retrieve);
                  window.localStorage.setItem('storage', JSON.stringify(retrieve));
                  console.log("PendienteInput.removeItem end")
                  this.setState({pendienteList: []})
                }   
                render(){
                      return(
                        <div className = "PendienteInput">
                           
                            <form className = 'textinput' onSubmit={this.onSubmitPen}>
                                <input                                    
                                    value={this.state.newpendientetxt} 
                                    placeholder={`Pendiente de ${this.props.name}`}
                                    onChange={this.onChangePen}
                        
                                />
                            </form>
                           {JSON.parse(window.localStorage.getItem('storage'))[[this.props.listName]].map((d, i) => (<List removeItem={this.removeItemPen}  name={d} index={i} key={'k[-'+ i} />)) }
                          
                         </div>
                            );
                    }
  
    }
    export default PendienteInput;



