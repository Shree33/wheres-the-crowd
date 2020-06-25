import React, { Component } from 'react';
import { Select } from 'grommet';



function Filter() {
  const [value, setValue] = React.useState('');
  //   useEffect(()=> {
    
  // })
  return (
    <Select
      options={['','Virtual', 'Live Music', 'Reading Club', 'Other', 'Community', 'Open Mic', 'Tasting', 'Cooking Class', 'Deals', 'Trivia', 'Athletic', 'Dinner Club', 'Tournament', 'Dancing', 'Karaoke', 'Dance Party', 'Cooking Party', 'Food Deals', 'Meetup']}
      value={value}
      onChange={({ option }) => setValue(option)}
    />
  );

}
export default Filter;