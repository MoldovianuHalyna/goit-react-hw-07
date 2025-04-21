import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import Grid from "../Grid/Grid";
import s from "./ContactList.module.css";
import { selectContacts } from "../../redux/selectors";
import { selectFilter } from "../../redux/selectors";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul className={s.contactList}>
      <Grid>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <li key={id}>
              <Contact id={id} name={name} number={number} />
            </li>
          );
        })}
      </Grid>
    </ul>
  );
};

export default ContactList;
