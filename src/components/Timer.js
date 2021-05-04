import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Timer = () => {
  return (
    <div>
      <h1>
        This component is displayed when the start timer button is clicked
      </h1>
      <Link to='/'>
        <Button btnText={'Main Page'} />
      </Link>
      <Button btnText={'Go'} />
      <Button btnText={'Pause'} />
    </div>
  );
};

export default Timer;
