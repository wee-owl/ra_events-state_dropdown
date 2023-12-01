import React from 'react';
import '../App.css';

function DropdownItem({ value, selected }) {
  const listItemSelected = {
    color: '#507cfb',
  }

  return (
    <a 
      href={'#' + value} 
      className='list__item'
      style={selected === 'true' ? listItemSelected : {color: ''}}>
        {value}
    </a>
  )
}

export default DropdownItem;
