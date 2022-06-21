import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INote } from "../constant";

const noteSlice = createSlice({
    name: 'note',
    initialState: <INote> {},
    reducers: {
        setNote:((state: INote, action: PayloadAction<INote>) => action.payload)
    }
})

export const { setNote } = noteSlice.actions;

export default noteSlice.reducer;