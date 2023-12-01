import React from 'react';
import DropdownItem from './DropdownItem';
import '../App.css';

function DropdownList({ data }) {
  const settingsArray = [
    'profile information',
    'change password',
    'become PRO',
    'help',
    'log out',
  ];

  const [state, setState] = React.useState('');

  const selectItem = (e) => {
    const selectedElem = e.target.textContent;
    const setSelect = (currentElem) => {
      return currentElem === selectedElem ? currentElem : selectedElem;
    };
    setState(setSelect);
  };

  return (
    <div className={data === 'close' ? 'list__close' : 'list__open'} onClick={selectItem}>
      {settingsArray.map((item, i) => 
        <DropdownItem key={i} value={item} selected={state === item ? 'true' : 'false'}/>
      )}
    </div>
  )
}

export default DropdownList;
