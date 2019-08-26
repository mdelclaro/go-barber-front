import React from 'react';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import { Container, Content, Profile } from './styles';
import header from '~/assets/header.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={header} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Notifications />

          <Profile>
            <div>
              <strong>Test User</strong>
              <Link to="/profile">My profile</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Test User"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
