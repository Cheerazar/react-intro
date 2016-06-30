class Square extends React.Component {
  render() {
    return (
      <div className="square"></div>
    );
  }
}

class Row extends React.Component {
  render() {
    const { numOfSquares } = this.props;

    const squares = [];

    for (let i = 0; i < numOfSquares; i++) {
      squares.push(<Square key={i} />);
    }

    return (
      <div>
        { squares }
      </div>
    );
  }
}

class Board extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      size: 1
    }
  }

  increaseBoardSize () {
    this.setState({ size: ++this.state.size })
  }

  render() {
    const { size } = this.state;
    const rows = [];

    for (let i = 0; i < size; i++) {
      rows.push(<Row numOfSquares={size} key={i} />)
    }

    return (
      <div>
        <button onClick={this.increaseBoardSize.bind(this)}>Click Me!</button>
        <div>
          { rows }
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Board />, document.getElementById('app'));
