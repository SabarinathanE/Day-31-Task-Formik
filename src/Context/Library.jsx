import { createContext, useEffect, useState } from "react";

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

        setDetails([
            {
              "id": 1,
              "Author": "Lewis Carrol",
              "BirthYear" : 1960,
              "Bio" : "Charles Lutwidge Dodgson, better known by his pen name Lewis Carroll, was an English author, poet, mathematician and photographer. His most notable works are Alice's Adventures in Wonderland and its sequel Through the Looking-Glass. He was noted for his facility with word play, logic, and fantasy"
            },
            {
             "id": 2,
             "Author": "Coleridge",
             "BirthYear" : 1998,
             "Bio" : "Samuel Taylor Coleridge was an English poet, literary critic, philosopher, and theologian who, with his friend William Wordsworth, was a founder of the Romantic Movement in England and a member of the Lake Poets. He also shared volumes and collaborated with Charles Lamb, Robert Southey, and Charles Lloyd"  
            },
            {
             "id": 3,
             "Author": "Arthur Conan Doyle",
             "BirthYear" : 1955,
             "Bio" : "Sir Arthur Ignatius Conan Doyle KStJ, DL was a British writer and physician. He created the character Sherlock Holmes in 1887 for A Study in Scarlet, the first of four novels and fifty-six short stories about Holmes and Dr. Watson. The Sherlock Holmes stories are milestones in the field of crime fiction"   
            },
            {
             "id": 4,
             "Author": "Mark Twain",
             "BirthYear" : 1990,
             "Bio" : "Samuel Langhorne Clemens, known by the pen name Mark Twain, was an American writer, humorist, essayist, entrepreneur, publisher, and lecturer. He was praised as the greatest humorist the United States has produced, and William Faulkner called him the father of American literature"   
              } 
          ])
        return () => {};
    },[])

    useEffect(() => {
        setBookDetails([
            {
              "id": 1,
              "Author": "Lewis Carrol",
              "ISBN": 34342342341,
              "Published" : 2000,
              "Title" : "Alice in Wonderland"
            },
            {
             "id": 2,
             "Author": "Coleridge",
             "ISBN": 47571343142,
             "Published" : 1980,
             "Title" : "Ancient Mariner"
            },
            {
             "id": 3,
             "Author": "Arthur Conan Doyle",
             "ISBN": 41343142,
             "Published" : 1988,
             "Title" : "Adventures of Sherlock Holmes"
            },
            {
             "id": 4,
             "Author": "Mark Twain",
             "ISBN": 54164533465,
             "Published" : 1996,
             "Title" : "Adventures of Tom Sawyer"
              } 
          ])
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
