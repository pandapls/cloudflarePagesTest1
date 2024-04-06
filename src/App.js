import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react"

function App() {
    const [rdata, setData] = useState('');
    useEffect(() => {
      fetch('https://example.lhf932650719.workers.dev/')
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setData(data.msg)
        })
        .catch(error => {
          console.error('Error:', error);
        });
  
    }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hello, cloudflare pages test2
          {rdata}
        </p>
      </header>
    </div>
  );
}

export default App;
