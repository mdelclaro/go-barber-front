import React, { useState, useMemo } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { format, subDays, addDays } from 'date-fns';

import api from '~/services/api';

import { Container, Time } from './styles';

export default function Dashboard() {
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(() => format(date, 'MMMM do'), [date]);

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  return (
    <Container>
      <header>
        <button type="button" onClick={handlePrevDay}>
          <MdChevronLeft size={36} color="#fff" />
        </button>
        <strong>{dateFormatted}</strong>
        <button type="button" onClick={handleNextDay}>
          <MdChevronRight size={36} color="#fff" />
        </button>
      </header>

      <ul>
        <Time past>
          <strong>08:00am</strong>
          <span>Fulano Ashad</span>
        </Time>
        <Time available>
          <strong>09:00am</strong>
          <span>Available</span>
        </Time>
        <Time>
          <strong>10:00am</strong>
          <span>Fulano Ashad</span>
        </Time>
        <Time>
          <strong>11:00am</strong>
          <span>Fulano Ashad</span>
        </Time>
      </ul>
    </Container>
  );
}
