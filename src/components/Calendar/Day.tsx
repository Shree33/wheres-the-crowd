import React, { useContext } from 'react';
import { isBefore, isSameDay, format } from 'date-fns';
import { Text, Box, ResponsiveContext } from 'grommet';
import styled from 'styled-components';
import Events from './Events';
import CalendarBox from './CalendarBox';
import { Hide, Show } from '../Query';

type Props = ModalData & {
  onClick?: () => void;
};

const Day = ({ date, events, onClick }: Props) => {
  const size = useContext(ResponsiveContext);
  const today = new Date();

  const isToday = isSameDay(date, today);
  const hasPast = isBefore(date, today) && !isToday;
  const dayType = (isToday && 'today') || (hasPast && 'past') || 'day';
  const phoneViewport = size === 'small';

  if (phoneViewport && (hasPast || events.length === 0) && !isToday)
    return null;

  return (
    <CalendarBox
      background={`calendar-${dayType}-background`}
      border={{ color: `calendar-${dayType}-border` }}
      pad={phoneViewport ? 'small' : 'xsmall'}
      onClick={onClick}
      square
    >
      <Box direction="column" fill="vertical" gap="small">
        <Show size="small">
          <RowDay date={date} type={dayType} />
        </Show>
        <Hide size="small">
          <CalendarDay date={date} type={dayType} />
        </Hide>
        <Events events={events} hasPast={hasPast} />

      </Box>
    </CalendarBox>
  );
};

type DayProps = { date: Date; type: string };

const RowDay = ({ date, type }: DayProps) => (
  <Box width="xsmall">
    <Text color={`calendar-${type}-text`} size="large" a11yTitle="Day number">
      {format(date, 'dd')}
    </Text>

    <Text color={`calendar-${type}-text`} size="small" a11yTitle="Day">
      {format(date, 'cccc')}
    </Text>
  </Box>
);

const CalendarDay = ({ date, type }: DayProps) => (
  <DayText
    color={`calendar-${type}-text`}
    type={type}
    size="large"
    a11yTitle="Day number"
    textAlign="end"
  >
    {format(date, 'dd')}
  </DayText>
);

const DayText = styled(Text)<{ type: string }>`
  text-decoration: ${(props) =>
    props.type === 'past' ? 'line-through' : 'inherit'};
  position: absolute;
  top: 5px;
  left: 10px;
`;

export default Day;
