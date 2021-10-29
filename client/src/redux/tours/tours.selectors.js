import { createSelector } from 'reselect';

const selectTours = (state) => state.tours;

export const SelectAllTours = createSelector(
  selectTours,
  (tours) => tours.tours
);
export const SelectATour = createSelector(selectTours, (tours) => tours.tour);
export const SelectTourLoading = createSelector(
  selectTours,
  (tours) => tours.loading
);
