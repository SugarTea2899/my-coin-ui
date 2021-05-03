/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useEffect } from 'react';
import MyAppBar from '../../components/MyAppBar';
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
    <div>
      <MyAppBar />
    </div>
  );
}
