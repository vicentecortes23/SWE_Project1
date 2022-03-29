import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';

//const element = <h1>Hello World</h1>
//ReactDOM.render(element, document.getElementById('root'))



class Title extends React.Component {
  render() {
    return (
      <div className="Title">
        <h1>Home</h1>
              <div className="Title-Subtitle">San Franciscos Privately Owned Public Spaces</div>
        <h1>About</h1>
              <div className="Title-Subtitle">about stuff</div>
        <h1>Calendar</h1>
              <div className="Title-Subtitle">calendar</div>
        <h1>Links</h1>
              <div className="Title-Subtitle">links</div>
      </div>
    );
  }
}


  

// this class renders a single button
class Square extends React.Component {

    render() {
      return (
        <button className="square" 
        onClick={() => this.props.onClick({value: 'X'})}
        >
          {this.props.value}
        </button>
      );
    }
  }
  
  // this class renders 9 squares for the tic tac toe grid
  class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };
    }

    renderSquare(i) {
      return <Square // we are passing down two props from board to square: value and onClick
                value={this.state.squares[i]}
                onClick={() =>this.handleClick(i)}
            />; // this creates a square object with value i
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  // renders a board with placeholder values to modify later
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <div>
      <Game />
      <Title />
    </div>,
    document.getElementById('root')
  );
  
  