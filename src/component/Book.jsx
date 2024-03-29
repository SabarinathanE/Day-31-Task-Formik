import { Link } from "react-router-dom"
import { useContext } from "react";
import { LibraryContext } from "../Context/Library";
import PropTypes from "prop-types";

export default function Book({data = []}) {

    const {isBookEditing = () => {},setEditBookindex = () => {}, bookdetails =[],setBookDetails = () => {}} = useContext(LibraryContext);

    function EditData() {
        isBookEditing(true)
        const EditedIndexValue = bookdetails.findIndex(obj => obj.id == data.id);
        setEditBookindex(EditedIndexValue)
    }

    function DeleteData() {
        setBookDetails(bookdetails.filter(d => d.id != data.id))
        console.log(data)
    }

    return (
        <div className="row">
            <div className="card mb-4" style={{width: "100%"}}>
                <div className="card-body">
                    <p className="card-text"><b>{data.Title}</b></p>
                    <p className="content"><b>Author:</b> {data.Author}</p>
                    <p className="content"><b>ISBN:</b> {data.ISBN}</p>
                    <div className="row">
                        <div className="col-10">
                            <p className="content"><b>Published:</b> {data.Published}</p>
                        </div>
                        <div className="col-2">
                            <p className="action">
                            <Link type="button" to="/AddBooks" onClick={EditData} className="btn btn-primary btn-sm me-1">Edit</Link>
                                <button type="button" onClick={DeleteData} className="btn btn-secondary btn-sm ">Delete</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Book.propTypes = {
    data: PropTypes.array
}
