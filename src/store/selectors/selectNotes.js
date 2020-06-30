export const selectNotes = (state) => state.notes.items;

export const selectFilteredNotes = (state) => state.notes.filteredItems;

export const selectDrafts = (state) => state.notes.drafts;

export const selectDraft = (state) => state.notes.selectedDraft;
