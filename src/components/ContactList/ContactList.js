import styles from "./ContactList.module.css";

const ContactList = ({ contactList, onDeleteContact }) => {
  return (
    <ul>
      {contactList.map(({ id, name, number }) => (
        <li className={styles.item} key={id}>
          <b>{name}: </b>
          <span>{number}</span>
          <button className={styles.button} onClick={() => onDeleteContact(id)}>
            remoove
          </button>
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
