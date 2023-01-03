import { useState, createContext, useEffect } from "react";
// import SHOP_DATA from "../shop-data";
import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase/Firebase";

//the value we want to access
export const ProductsContext = createContext({
    products: [],
});

export const ProductProvider = ({ children }) => {
    const [products, setProducts]= useState([]);
    // Run below once to add collection to Firebase:
    // useEffect(()=>{
    //     addCollectionAndDocuments('categories', SHOP_DATA)
    // }, [])

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap)
        }
        getCategoriesMap();
    }, [])

    const value = { products };


    return (
    <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}