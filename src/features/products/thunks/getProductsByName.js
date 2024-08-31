import { db } from "@/firebase/firebase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, query, where } from "firebase/firestore";

export const getProductsByName = createAsyncThunk(
  "products/getProductsByName",
  async (searchResult, thunkAPI) => {
    try {
      const querySnapshot = await getDocs(
        query(
          collection(db, "products"),
          where("name", ">=", searchResult),
          where("name", "<=", searchResult + "\uf8ff")
        )
      );
			const products = [];
			querySnapshot.forEach(doc => {
				products.push({ id: doc.id, ...doc.data() })
			})
			return products;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
