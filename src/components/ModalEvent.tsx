import React, { ReactNode, Fragment } from 'react';
import { Layer, Box, Text, Button } from 'grommet';
import { FormClose } from 'grommet-icons';
import { format } from 'date-fns';

type Props = ModalData & {
  onClose: () => void;
};

const ModalEvent = ({ onClose, date, events }: Props) => (
  <Layer position="center" onClickOutside={onClose} onEsc={onClose} modal>
    <Header onClick={onClose}>{format(date, 'cccc d, MMMM')}</Header>
    <Box direction="column" align="center" tag="section" margin="small" overflow="scroll" >
      {events.map((event, i, arr) => (
        <Fragment key={event.id}>
          <EventDescription event={event} />
          {i !== arr.length - 1 && (
            <Box
              margin={{ vertical: 'small' }}
              background="calendar-modal-separator"
              height="2px"
              width="100%"
              style={{ borderRadius: '50%' }}
            />
          )}
        </Fragment>
      ))}
    </Box>
  </Layer>
);

type HeaderProps = {
  children: ReactNode;
  onClick: () => void;
};

const Header = ({ onClick, children }: HeaderProps) => (
  <Box
    direction="row"
    align="center"
    tag="header"
    elevation="small"
    justify="between"
  >
    <Text
      margin={{ left: 'small' }}
      color="calendar-modal-text"
      a11yTitle="Selected day"
    >
      <b>{children}</b>
    </Text>
    <Button
      icon={<FormClose />}
      a11yTitle="Close popup button"
      onClick={onClick}
    />
  </Box>
);

const EventDescription = ({ event }: { event: EventInfo }) => (
  <Box
    direction="row"
    fill="horizontal"
    background="calendar-modal-background"
    justify="center"
    margin="medium"
    flex="grow"
  >
    <Text a11yTitle="Event time" margin="small" color="calendar-modal-text" >
      {event.time}
    </Text>
    <Box margin="small" width="medium">
      <Text
        a11yTitle="Event name"
        weight="bold"
        size="large"
        color="calendar-modal-text"
      >
        {event.eventName}
      </Text>

      {event.place && (
        <Text a11yTitle="Event place" color="calendar-modal-text">
          {event.place} {event.address}
        </Text>
      )}

      {event.price && (
        <Text a11yTitle="Event price" color="calendar-modal-text">
          {event.price}
        </Text>
      )}
      {event.description && (
        <Text a11yTitle="Event description" color="calendar-modal-text" dangerouslySetInnerHTML={{__html: event.description}}>
        </Text>
      )}

      {event.tags && (
        <Text a11yTitle="Event tags" color="calendar-modal-text" dropAlign="bottom" size="small" weight="bold">
          {event.tags}
        </Text>
      )}

      <Box margin={{ top: 'medium' }}>
        <Button
          href={event.eventLink}
          label="Link"
          alignSelf="end"
          a11yTitle="Event link"
          target="_blank"
          primary
        />
      </Box>
    </Box>
  </Box>
);

export default ModalEvent;
