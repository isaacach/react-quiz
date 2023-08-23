/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from 'react';
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi';
import Panel from './Panel';

export default function Dropdown({ options, value, onChange}) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  const handleOptionClick = (option) => {
    onChange(option);
    setIsOpen(false);
  }

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) return;
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('click', handler);

    return () => {
      document.removeEventListener('click', handler);
    }
  }, []);

  const renderedOptions = options.map((option) => {
    return (
      <Panel className='option' key={option.value} onClick={() => handleOptionClick(option)}>
        {option.label}
      </Panel>
    );
  });

  return (
    <div ref={divEl} className='w-52 dropdown'>
      <Panel className='dropdown-panel' onClick={handleClick} >
        {value?.label || 'Select'}
        <span>{isOpen ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}</span>
        </Panel>
      {isOpen && <div className='options-wrapper'>{renderedOptions}</div>}
    </div>
    
  );

}