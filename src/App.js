/*
 * @Author:  Findly <weninqiu42@gmail.com>
 * @Date: 2021-11-05 10:52:24
 * @LastEditors: Findly
 * @LastEditTime: 2021-11-08 17:20:35
 * @Description: 
 */
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>触发了webhook钩子吗？</h2>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
