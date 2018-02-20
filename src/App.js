import React, { Component } from 'react';
import './App.css';
import Button from './components/buttons/Button.js'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      d4: [],
      d6: [],
      d8: [],
      d10: [],
      d12: [],
      d20: [],
  }
}

  _getRandomIntInclusive(max) {
    var min = Math.ceil(1);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  _rollDice(max) {
    if(max === 20) {
      const newVal = this._getRandomIntInclusive(max);
      this.setState({
        d20: [...this.state.d20, newVal]
      });
    } else if (max === 12) {
        this.setState({
          d12: [...this.state.d12, this._getRandomIntInclusive(max)]
      });
    } else if (max === 10) {
        this.setState({
          d10: [...this.state.d10, this._getRandomIntInclusive(max)]
      });
    } else if (max === 8) {
        this.setState({
          d8: [...this.state.d8, this._getRandomIntInclusive(max)]
      });
    } else if (max === 6) {
        this.setState({
          d6: [...this.state.d6, this._getRandomIntInclusive(max)]
      });
    } else if (max === 4) {
        this.setState({
          d4: [...this.state.d4, this._getRandomIntInclusive(max)]
      });
    }
  }

  _clearRoll(num) {
    if(num === 20) {
      this.setState({
        d20: []
      });
    } else if (num === 12) {
        this.setState({
          d12: []
      });
    } else if (num === 10) {
        this.setState({
          d10: []
      });
    } else if (num === 8) {
        this.setState({
          d8: []
      });
    } else if (num === 6) {
        this.setState({
          d6: []
      });
    } else if (num === 4) {
        this.setState({
          d4: []
      });
    }
  }

  _renderRolls(array) {
    return array.map((num, index) =>{
      return (
        <p key={index} className="result-p"> {num}</p>
        );
    });
  }

  render() {
    return (
      <div className="App">
        <div className="mainBox">
          <div className="header">
            <h1>Roll for initiative</h1>
            <p>Thanks for visiting my coding sample. I created this DnD dice roller app with Test Driven Development. You can find out more about my process in the README.</p>
            <p>Please visit my GitHub or my Portfolio site.</p>
          </div>
          <div className="holder" id="d4">
            <Button className="roller" handleClick={() => this._rollDice(4)} id="d4-button" label="d4"/>
            <Button className="clear" handleClick={() => this._clearRoll(4)} label="clear"/>
            <div className="results" id="d4results">
              {this._renderRolls(this.state.d4)}
            </div>
          </div>
          <div className="holder" id="d6">
            <Button className="roller" handleClick={() => this._rollDice(6)} id="d6-button" label="d6"/>
            <Button className="clear" handleClick={() => this._clearRoll(6)} label="clear"/>
            <div className="results" id="d6results">
              {this._renderRolls(this.state.d6)}
            </div>
          </div>
          <div className="holder" id="d8">
            <Button className="roller" handleClick={() => this._rollDice(8)} id="d8-button" label="d8"/>
            <Button className="clear" handleClick={() => this._clearRoll(8)} label="clear"/>
            <div className="results" id="d8results">
              {this._renderRolls(this.state.d8)}
            </div>
          </div>
          <div className="holder" id="d10">
            <Button className="roller" handleClick={() => this._rollDice(10)} id="d10-button" label="d10"/>
            <Button className="clear" handleClick={() => this._clearRoll(10)} label="clear"/>
            <div className="results" id="d10results">
              {this._renderRolls(this.state.d10)}
            </div>
          </div>
          <div className="holder" id="d12">
            <Button className="roller" handleClick={() => this._rollDice(12)} id="d12-button" label="d12"/>
            <Button className="clear" handleClick={() => this._clearRoll(12)} label="clear"/>
            <div className="results" id="d12results">
              {this._renderRolls(this.state.d12)}
            </div>
          </div>
          <div className="holder" id="d20">
            <Button className="roller" handleClick={() => this._rollDice(20)} id="d20-button" label="d20"/>
            <Button className="clear" handleClick={() => this._clearRoll(20)} label="clear"/>
            <div className="results" id="d20results">
              {this._renderRolls(this.state.d20)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
