import React from 'react';
import ReactDOM from 'react-dom';

const api = 'https://launchlibrary.net/1.2/rocket';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rockets: [] };
    this.getData();
  }

  getData() {
    fetch(api)
      .then(res => res.json())
      .then(response => {
        this.setState({ rockets: response.rockets });
      });
  }

  render() {
    const { rockets } = this.state;
    return (
      <div>
        {rockets.map((rocket) => {
          return <div>{rocket.name}</div>
        })}
      </div>
    );
  }
};

ReactDOM.render(<App/>, document.getElementById('root'));