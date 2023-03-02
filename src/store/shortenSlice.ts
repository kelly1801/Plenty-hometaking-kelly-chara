import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ShortLinkResponse, Result } from "../types/UrlResponse";
import { getShortLink } from "../api/axios";
const initialState: ShortLinkResponse[] = [];

export const retrieveShortenLink = createAsyncThunk(
  "short/retrieve",
  async (url: string) => {
    const link = await getShortLink(url);

    return link;
  }
);

export const shortSlice = createSlice({
  name: "short",
  initialState,
  reducers: {
    setLinks: (state, action: PayloadAction<ShortLinkResponse[]>) => {
      return [...state, ...action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(retrieveShortenLink.fulfilled, (state, action) => {
      return [...state, action.payload];
    });
  },
});

export const { setLinks } = shortSlice.actions;
export default shortSlice.reducer;
