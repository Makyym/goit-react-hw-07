import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
    const contacts = useSelector(selectFilteredContacts);
    return (
        <ul className={s.list}>
            {contacts.map(contact => {
                return (
                    <li key={contact.id}>
                        <Contact data={contact} contactId={contact.id} />
                    </li>
                )
            })}
        </ul>
    )
}

export default ContactList