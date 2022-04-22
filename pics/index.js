import ReactDOM from 'react-dom/client'
import React from 'react';
import App from './components/App';
import './components/Style.css'

class Pics extends React.Component {

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <App />
      </div>
    )
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(<Pics />)
