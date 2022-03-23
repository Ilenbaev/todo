import { useState } from "react";

const AddContact = (props) => {
  let [name, setName] = useState("");
  let [surname, setSurname] = useState("");

  function handleClick() {
    if (!name.trim() || !surname.trim()) {
      alert("Заполните поле");
      return;
    }
    let newContact = {
      name,
      surname,
      id: Date.now(),
    };
    props.handleNewContact(newContact);
    setName("");
    setSurname("");
  }
  return (
    <div className="text-center">
      <input
        className="my-2"
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="name"
        value={name}
      />{" "}
      <br />
      <input
        className="mb-2"
        onChange={(e) => setSurname(e.target.value)}
        type="text"
        placeholder="surname"
        value={surname}
      />{" "}
      <br />
      <button
        style={{ border: "none", backgroundColor: "aqua" }}
        onClick={handleClick}
      >
        Add todo
      </button>
    </div>
  );
};

export default AddContact;
