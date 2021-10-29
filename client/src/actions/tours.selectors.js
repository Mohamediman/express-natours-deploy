import { createSelector } from 'reselect';

const selectTours = (state) => state.tours;

export const SelectAllTours = createSelector(
  selectTours,
  (tours) => tours.tours
);
