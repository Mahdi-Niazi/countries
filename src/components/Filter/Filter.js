import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setRegion } from '../../redux/countriesSlice/countriesSlice';

const Filter = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const selectRef = useRef();

  useEffect(() => {
    if (filter !== '') {
      dispatch(setRegion(filter.toLocaleLowerCase()));
    }
  }, [dispatch, filter]);

  const setRefState = () => {
    const newRegion = selectRef.current.value;
    setFilter(newRegion);
  };

  return (
    <div className="filter__container">
      <div>
        <select
          name="selected"
          ref={selectRef}
          onChange={setRefState}
          className="filter__select"
        >
          <option defaultValue="Select Region" hidden>
            Select Region
          </option>
          <option value="Asia">Asia</option>
          <option value="Oceania">Oceania </option>
          <option value="Europe"> Europe </option>
          <option value="Americas"> Americas</option>
          <option value="Africa"> Africa</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
