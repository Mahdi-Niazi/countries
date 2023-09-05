import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Country from '../components/Country/Country';
import Filter from '../components/Filter/Filter';

const Homepage = () => (
  <>
    <Navbar title="Countries" back={false} />
    <Filter />
    <Country />
  </>
);

export default Homepage;
