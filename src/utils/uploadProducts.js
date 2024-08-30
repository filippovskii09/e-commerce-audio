import { db } from "@/firebase/firebase";
import { addDoc, collection } from "firebase/firestore";

const { products } = require("@/assets/products");

export const uploadProducts = async () => {
  try {
    const productsRef = collection(db, "products");
    for (const product of products) {
      await addDoc(productsRef, product);
    }
    console.log("Products uploaded successfully!");
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};
