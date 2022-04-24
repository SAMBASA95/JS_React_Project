import ReactDOM from 'react-dom/client'
import React from 'react';
import App from './components/App.js';
import './components/Style.css'

class Videos extends React.Component {

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <App />
      </div>
    )
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(<Videos />)
