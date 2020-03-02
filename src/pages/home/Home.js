import React from 'react';
import { useIntl } from 'react-intl';
import MainLayout from '../../components/main-layout/MainLayout';
import Box from '../../components/box/Box';

const Home = ({ history }) => {
  const { formatMessage } = useIntl();
  return (
    <MainLayout history={history} title={formatMessage({ id: 'menu.home' })}>
      <Box>
        <div style={{ textAlign: 'center', marginTop: '15px' }}>
          <h1>HOME OF QUE VER</h1>
          <p>NOTICIAS NOVEDADES CINE</p>
        </div>
      </Box>
    </MainLayout>
  );
};

export default Home;
