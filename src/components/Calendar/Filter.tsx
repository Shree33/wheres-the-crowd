import React, { Component } from 'react';
import { Select } from 'grommet';

const TAGS = ['Virtual', 'Live Music', 'Reading Club', 'Other', 'Community', 'Open Mic', 'Tasting', 'Cooking Class', 'Deals', 'Trivia', 'Athletic', 'Dinner Club', 'Tournament', 'Dancing', 'Karaoke', 'Dance Party', 'Cooking Party', 'Food Deals', 'Meetup'];


class Filter extends React.Component {
  const { options, value } = this.state;
  return (
        <Select
          multiple={true}
          value={value}
          onSearch={(searchText) => {
            const regexp = new RegExp(searchText, 'i');
            this.setState({ options: OPTIONS.filter(o => o.match(regexp)) });
          }}
          onChange={event => this.setState({
            value: event.value,
            options: TAGS,
          })}
          options={options}
        />
    );

}
