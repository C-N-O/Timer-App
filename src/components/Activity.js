import React from 'react';
import Dropdown from './Dropdown';
import { ActivityWrapper } from '../styles';
import Button from './Button';
import { Link } from 'react-router-dom';

const activity = [
  '--Select One--',
  'Studying',
  'Burpee',
  'Writing',
  'Squatting',
  'Reading',
  'Jumping Jack',
];
const activityInterval = [
  '--Select One--',
  '5 Minutes',
  '10 Minutes',
  '20 Minutes',
  '25 Minutes',
  '30 Minutes',
  '40 Minutes',
  '45 Minutes',
  '50 Minutes',
  '60 Minutes',
];
const restInterval = [
  '--Select One--',
  '5 Minutes',
  '10 Minutes',
  '15 Minutes',
];

const Activity = () => {
  return (
    <>
      <h1>Timer App...be productive</h1>
      <ActivityWrapper>
        <Dropdown heading={'Select Your Activity'} list={activity} />

        <div>
          <Dropdown
            heading={'Select Active Duration'}
            list={activityInterval}
          />
        </div>
        <div>
          <Dropdown heading={'Select Rest Duration'} list={restInterval} />
        </div>
      </ActivityWrapper>

      <Link to='/timer'>
        <Button btnText={'Start Timer'} />
      </Link>
    </>
  );
};

export default Activity;
