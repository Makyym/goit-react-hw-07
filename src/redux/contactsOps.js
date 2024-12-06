import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://67531d6cf3754fcea7bad35c.mockapi.io/';

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const response = await axios.get("contacts");
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const addContact = createAsyncThunk("contacts/addContact", async (body, thunkAPI) => {
    try {
        const response = await axios.post("contacts", body);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (taskId, thunkAPI) => {
    try {
        const response = await axios.delete(`contacts/${taskId}`);
        return taskId;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});