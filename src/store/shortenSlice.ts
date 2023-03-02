import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ShortLinkResponse } from "../types/UrlResponse";
import { getShortLink } from "../api/axios";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState: {
  links: ShortLinkResponse[];
} = {
  links: [],
};

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["register"],
};

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
      return {
        ...state,
        links: [...state.links, ...action.payload],
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(retrieveShortenLink.fulfilled, (state, action) => {
      return {
        ...state,
        links: [...state.links, action.payload],
      };
    });
  },
});

const persistedReducer = persistReducer(persistConfig, shortSlice.reducer);
export default persistedReducer;
export const { setLinks } = shortSlice.actions;
