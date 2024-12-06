import { useDispatch } from "react-redux";
import s from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsOps.js"

const Contact = ({ data, contactId }) => {
    const dispatch = useDispatch();
    const { name, number } = data;
    return (
        <div className={s.item}>
            <div>
                <p>{name}</p>
                <p>{number}</p>
            </div>
            <button onClick={() => dispatch(deleteContact(contactId))}>Delete</button>
        </div>
    )
}

export default Contact