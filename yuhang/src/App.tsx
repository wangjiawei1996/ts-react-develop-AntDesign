import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/Button/button';
import Alert, { AlertType } from './components/Alert/alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuitem';
import SubMenu from './components/Menu/subMenu';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <FontAwesomeIcon icon={faCoffee} />
        <Menu
          defaultIndex={0}
          onSelect={(index) => alert(index)}
          mode="vertical"
        >
          <MenuItem>cool link</MenuItem>
          <MenuItem disabled>cool link1</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>dropdown1</MenuItem>
            <MenuItem>dropdown1</MenuItem>
          </SubMenu>
          <MenuItem>cool link3</MenuItem>
        </Menu>
        <Alert message={123}></Alert>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
