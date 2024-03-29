import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const LibraryContext = createContext({
    details: [],
    setDetails: () => {},
    isEditing: false,
    setIsEditing: () => {},
    editindex: null,
    setEditindex: () => {},
    bookdetails: [],
    setBookDetails: () => {},
    isBookEditing: false,
    setIsBookEditing: () => {},
    editBookindex: null,
    setEditBookindex: () => {}
})

export default function LibraryProvider({children}) {

    const [details,setDetails] = useState([]);
    const [bookdetails,setBookDetails] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [isBookEditing, setIsBookEditing] = useState(false);
    let [editindex,setEditindex] = useState(null);
    let [editBookindex,setEditBookindex] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5173/Authors.json")
        .then((result) => (result.json())
        .then((response) => {
        setDetails(response.Authors)
        }
        ))

        return () => {};
    },[])

    useEffect(() => {
        fetch("http://localhost:5173/Books.json")
        .then((results) => (results.json())
        .then((response) => {
        setBookDetails(response.Books)
        }
        ))

        return () => {};
    },[])

    return (
        <LibraryContext.Provider value={{details,setDetails,
            isEditing,setIsEditing,
            editindex,setEditindex,
            bookdetails,setBookDetails,
            isBookEditing,setIsBookEditing,
            editBookindex,setEditBookindex}}>
            {children}
        </LibraryContext.Provider>
    )
}

LibraryProvider.proptypes = {
    children: PropTypes.node
}