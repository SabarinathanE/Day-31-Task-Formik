import { useContext } from "react";
import Author from "../component/Author";
import { LibraryContext } from "../Context/Library";

export default function Authers() {
const {details = []} = useContext(LibraryContext)

    return (
        <section className="container">
            {
                details.map((data, index) => (
                    <Author key={index} data={data} />
                ))
            }
        </section>
)
}