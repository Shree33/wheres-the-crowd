import React, { useState, useMemo, useCallback } from 'react';
import { Box } from 'grommet';
import { graphql, useStaticQuery } from 'gatsby';
import Footer from '../components/Footer';
import ModalEvent from '../components/ModalEvent';
import Month from '../components/Calendar/Month';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import groupEventsByMonth from '../utils/groupEventsByMonth';
import { format } from 'date-fns';
import { initGA, logPageView } from "../components/GoogleAnalytics.tsx"

const SPREADSHEET_QUERY = graphql`
  query eventsQuery {
    site {
      siteMetadata {
        limitMonthInTheFuture
      }
    }
    allGoogleSheetFormResponses1Row {
      nodes {
        id
        eventName: whatisthename
        date: when
        eventLink: linktotheevent
        place: where
        price
        tags
        time
        address
        description
      }
    }
  }
`;




var CalendarPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState<ModalData>();
  const [filter, setFilter] = useState('');

  const { allGoogleSheetFormResponses1Row, site } = useStaticQuery(SPREADSHEET_QUERY);
  const { limitMonthInTheFuture } = site.siteMetadata;

  const months = useMemo(
    () =>
      groupEventsByMonth(allGoogleSheetFormResponses1Row.nodes, limitMonthInTheFuture),
    [allGoogleSheetFormResponses1Row.nodes, limitMonthInTheFuture],
  );

  const openModal = useCallback((data: ModalData) => {
    setModalData(data);
    setShowModal(true);
  }, []);

  return (
    <Layout>
        {initGA()}
        {logPageView()}
      <Hero />
      <Box id="calendars" animation="fadeIn">
        {months.map((month) => (
          <Month
            key={format(month.startDate, 'MM')}
            openModal={openModal}
            {...month}
          />
        ))}
      </Box>
      {showModal && (
        <ModalEvent onClose={() => setShowModal(false)} {...modalData!} />
      )}
      <Footer />
    </Layout>
  );
};

export default CalendarPage;