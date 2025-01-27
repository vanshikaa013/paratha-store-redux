import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const MenuSlice = createSlice({
    name:"menu",
    initialState:{
        menu:[],
        isLoading:false , 
        isSuccess:false , 
        isError:false
    },
    reducers:{},
    extraReducers:builder=>{
        builder
        .addCase(fetchItems.pending ,(state , action)=>{
            state.isLoading = true , 
            state.isSuccess = false , 
            state.isError = false
        })
        .addCase(fetchItems.fulfilled ,(state , action)=>{
            state.isLoading = false , 
            state.isSuccess = true , 
            state.isError = false , 
            state.menu= action.payload
        })
        .addCase(fetchItems.rejected ,(state , action)=>{
            state.isLoading = false , 
            state.isSuccess = false , 
            state.isError = true
        })

    }
})

export default  MenuSlice.reducer

// fetch items
export const fetchItems = createAsyncThunk("FETCH/ITEMS" , async()=>{
    const data = await fetch("https://paratha-store.onrender.com/data");
  const response = await data.json();
//   console.log(response);
  return response;
})