import React from 'react';

interface PassengerInfoProps {
  title:string
}

const PassengerInfo: React.FC<PassengerInfoProps> = ({title}) => {
  return (
    <div className='w-full'>
        <span className='font-bold'>{title}</span>
      <input type="text" />
    </div>
  );
};

export default PassengerInfo;