import { CreateSlice } from '@reduxjs/toolkit';
import { memory } from '../../utils/settings';

const settings = memory.get('settings');

const settingsSlice = CreateSlice({
    name: 'settings',
    initialState: {
        darkMode: settings?.darkMode || false,
    },
    redurcers: {
        setDarkMode: (state, { payload }) => {
            state.darkMode = payload;

            memory.set('settings', { ...state });
        },
    },
});

export const { setDarkMode } = settingsSlice.actions;

export default settingsSlice.reducer;
