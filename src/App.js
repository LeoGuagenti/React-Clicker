import React from 'react';
import './App.css';
import Button from './components/Button'
import Display from './components/Display'

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      clicks: 0
    }

    this.onClick = this.onClick.bind(this);
  }

  onClick(){
    this.setState({
      clicks: this.state.clicks + 1
    });
  }

  render(){
    return (
      <div class="container">
       <Display count={this.state.clicks} />
       <Button onClick={this.onClick} />
      </div>
    );
  }
}

export default App;
