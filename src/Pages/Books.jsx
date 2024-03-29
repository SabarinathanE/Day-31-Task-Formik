import { useContext } from "react";
import Book from "../component/Book";
import { LibraryContext } from "../Context/Library";

export default function Books() {
const {bookdetails = []} = useContext(LibraryContext)

    return (
        <section className="container">
            {
                bookdetails.map((data, index) => (
                    <Book key={index} data={data} />
                ))
            }
        </section>
)
}