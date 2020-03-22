import React from 'react';
import logo from './logo.svg';
import './App.css';

import { IOverflowSetItemProps } from './components/OverflowSet/OverflowSet.types';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { OverflowSet } from './components/OverflowSet/OverFlowSet';

function App() {

  const items: IOverflowSetItemProps[] = [{
    icon: <SearchIcon/>
  },
  {
    icon: <AccountCircle/>
  }]

  const overFlowItems: IOverflowSetItemProps[] = [{
    icon: <MailIcon/>
  },
  {
    icon: <NotificationsIcon/>
  }]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        <OverflowSet overflowSide="start" items={items} overflowItems={overFlowItems}></OverflowSet>
      </header>
    </div>
  );
}

export default App;
