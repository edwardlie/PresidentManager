import React, { Component } from 'react';
import './App.css';
import PresItem from './PresItem';
import AddPresident from './AddPresident';

const presidents = [
  {
    name: 'George',
    lastname: 'Washington'
  },
  {
    name: 'John',
    lastname: 'Adams'
  }
  ];

localStorage.setItem('presidents', JSON.stringify(presidents))

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      presidents: JSON.parse(localStorage.getItem('presidents'))
    };

    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  componentWillMount(){
    const presidents = this.getPresidents();

    this.setState({presidents});
  }

  getPresidents(){
    return this.state.presidents;
  }

  onAdd(name, lastname){
    const presidents = this.getPresidents();

    presidents.push({
      name,
      lastname
    });

    this.setState({presidents});
  }

  onDelete(name){
    const presidents = this.getPresidents();

    const filteredPresidents = presidents.filter(product => {return product.name!== name;
    });

    //console.log(filteredPresidents);

    this.setState({presidents: filteredPresidents});
  }

  onEditSubmit(name, lastname, originalName){
    let presidents = this.getPresidents();

    presidents = presidents.map(president=>{
      if (president.name === originalName){
        president.name = name;
        president.lastname= lastname;
      }
      return president //since using map
    });

    this.setState({presidents});
  }

  render(){
    return (
      <div className="App">
        <h1>Presidents Manager</h1>
        
        <AddPresident
          onAdd={this.onAdd}
        />

        {
          this.state.presidents.map(president => {
            return (
              <PresItem
                key={president.name}
                {...president}
                onDelete ={this.onDelete}
                onEditSubmit={this.onEditSubmit}
              />
            );
          })
        }
      </div>
    );
  }
}
export default App;
