import React from 'react';
import DropdownList from './DropdownList';
import '../App.css';

function Dropdown() {
  const [state, setState] = React.useState('close');

  const viewList = () => {
    const changeClass = (value) => {
      return value === 'close' ? 'open' : 'close';
    };
    setState(changeClass);
  };

  return (
    <div className='container'>
      <button className='list__button' name='button' type='button' data={state} onClick={viewList}>
        account settings
      </button>
      <DropdownList data={state} />
    </div>
  )
}

export default Dropdown;
