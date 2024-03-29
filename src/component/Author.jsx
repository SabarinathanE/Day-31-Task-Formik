import { Link } from "react-router-dom"
import { useContext } from "react";
import { LibraryContext } from "../Context/Library";
import PropTypes from "prop-types";

export default function Author({data = []}) {

    const {setIsEditing = () => {},setEditindex = () => {}, details =[],setDetails = () => {}} = useContext(LibraryContext);

    function EditData() {
        setIsEditing(true)
        const EditedIndexValue = details.findIndex(obj => obj.id == data.id);
        setEditindex(EditedIndexValue)
    }

    function DeleteData() {
        setDetails(details.filter(d => d.id != data.id))
        console.log(data)
    }

    return (
        <div className="row">
            <div className="card mb-4" style={{width: "100%"}}>
                <div className="card-body">
                    <p className="card-text"><b>{data.Author}</b></p>
                    <p className="content"><b>Birth Year:</b> {data.BirthYear}</p>
                    <div className="row">
                        <div className="col-10">
                            <p className="content"><b>Bio:</b> {data.Bio}</p>
                        </div>
                        <div className="col-2">
                            <p className="action px-0">
                                <Link type="button" to="/AddAuthor" onClick={EditData} className="btn btn-primary btn-sm me-1">Edit</Link>
                                <button type="button" onClick={DeleteData} className="btn btn-secondary btn-sm">Delete</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Author.propTypes ={
    data: PropTypes.array
}

