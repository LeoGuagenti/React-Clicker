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

    this.onClickAdd = this.onClickAdd.bind(this);
    this.onClickSub = this.onClickSub.bind(this);
    this.onClickZero = this.onClickZero.bind(this);
  }

  onClickAdd(){
    this.setState({
      clicks: this.state.clicks + 1
    });
  }

  onClickSub(){
    this.setState({
      clicks: this.state.clicks - 1
    });
  }

  onClickZero(){
    this.setState({
      clicks: 0
    });
  }

  render(){
    return (
      <div class="container">
        <Display count={this.state.clicks} />
        <div class="controls">
          <Button onClick={this.onClickSub} content={'-'} />
          <Button onClick={this.onClickAdd} content={'+'}/>
          <Button onClick={this.onClickZero} content={'↻'} width={300}/>
        </div>
      </div>
    );
  }
}

export default App;
