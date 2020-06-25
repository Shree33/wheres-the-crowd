import React, { useState, useMemo, useCallback } from 'react';
import { Box } from 'grommet';
import GithubCorner from '../components/GithubCorner';
import Footer from '../components/Footer';
import ModalEvent from '../components/ModalEvent';
import Month from '../components/Calendar/Month';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import groupEventsByMonth from '../utils/groupEventsByMonth';
import { format } from 'date-fns';
import Filter from '../components/Calendar/Filter'



function monthBuilder (months, openModal) {}
    return(
    <Box id="calendars" animation="fadeIn">
        months.map((month))=> (
            <Month
                key={format(month.startDate, 'MM')}
                openModal={openModal}
                {...month}
            />
        )
    </Box>
    )
}