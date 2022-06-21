import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INote } from "../constant";

const notesSlice = createSlice({
    name: 'notes',
    initialState: <INote[]> [],
    reducers: {
        setNotes: ((state: INote[], action: PayloadAction<INote[]>) => {
            return action.payload;
        }),
        addNote: ((state: INote[], action: PayloadAction<INote>) => {
            return [...state, action.payload];
        }),
        updateNote: ((state: INote[], action: PayloadAction<INote>) => {
            return state.map(note => note.id === action.payload.id ? action.payload : note);
        }),
        deleteNote: ((state: INote[], action: PayloadAction<number>) => {
            return state.filter(note => note.id !== action.payload)
        }),
    }
});

export const { addNote, deleteNote, setNotes, updateNote } = notesSlice.actions;

export default notesSlice.reducer;