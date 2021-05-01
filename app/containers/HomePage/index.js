/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { fetchData } from '../../utils/apiClient';
import messages from './messages';

export default function HomePage() {

  useEffect(() => {
    const getData = async () => {
      const res = await fetchData('post', '/wallets');
      console.log(res);
    }
    
    getData();
  }, [])
  return (
    <h1>
      <FormattedMessage {...messages.header} />
    </h1>
  );
}
