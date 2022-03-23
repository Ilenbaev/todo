import { useState } from "react";

const EditContact = (props) => {
  let [name, setName] = useState(props.editContact.name);
  let [surname, setSurname] = useState(props.editContact.surname);

  function handleSaveClick() {
    let contact = { ...props.editContact };
    contact.name = name;
    contact.surname = surname;

    props.handleEditSaveContact(contact);
    setName("");
    setSurname("");
  }

  return (
    <div className="text-center">
      <input
        className="mt-5"
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="name"
        value={name}
      />
      <br />
      <input
        className="my-2"
        onChange={(e) => setSurname(e.target.value)}
        type="text"
        placeholder="surname"
        value={surname}
      />
      <br />
      <button
        style={{ border: "none", backgroundColor: "aqua" }}
        onClick={handleSaveClick}
      >
        Save
      </button>
    </div>
  );
};

export default EditContact;
