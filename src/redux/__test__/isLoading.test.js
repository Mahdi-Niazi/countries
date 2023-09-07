import {
  countriesSlice,
  getAllCountries,
} from '../countriesSlice/countriesSlice';

describe('countriesSlice', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      isLoading: false,
    };
  });

  test('sets isLoading to true when getAllCountries action is pending', () => {
    const action = { type: getAllCountries.pending.type };
    const state = countriesSlice.reducer(initialState, action);
    expect(state.isLoading).toBe(true);
  });

  test('sets isLoading to false when getAllCountries action is fulfilled', () => {
    const action = { type: getAllCountries.fulfilled.type, payload: [] };
    const state = countriesSlice.reducer(initialState, action);
    expect(state.isLoading).toBe(false);
  });

  test('sets isLoading to false when getAllCountries action is rejected', () => {
    const action = {
      type: getAllCountries.rejected.type,
      payload: 'Error message',
    };
    const state = countriesSlice.reducer(initialState, action);
    expect(state.isLoading).toBe(false);
  });
});
