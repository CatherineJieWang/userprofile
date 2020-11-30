import React, { useEffect, useState } from "react";
import {
  createContact,
  deleteContact,
  fetchAllContact,
} from "./actions/contactAction";
import { useDispatch, useSelector } from "react-redux";
import { ListCardContainer, ListContainer } from "./common/List";
import { Cover } from "./common/Cover";
import { Input, SubmitInput } from "./common/Input";
import Card from "./components/Card";
function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);
  useEffect(() => {
    dispatch(fetchAllContact());
  }, []);
  function handlenameChange(e) {
    setName(e.target.value);
  }
  function handleemailChange(e) {
    setEmail(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    let contact = {
      name: name,
      email: email,
    };
    setName("");
    setEmail("");
    dispatch(createContact(contact));
  }

  function removeContact(e, index) {
    e.preventDefault();
    dispatch(deleteContact(index));
  }

  return (
    <div className="container">
      <div>
        <h3>Add User Profile Form</h3>
        <form onSubmit={handleSubmit}>
          <span>Name:</span>
          <Input type="text" onChange={handlenameChange} value={name} />
          <br />
          <span>Email:</span>
          <Input type="email" onChange={handleemailChange} value={email} />
          <br />
          <SubmitInput type="submit" value="ADD" />
        </form>
        <hr />
        {
          <ListContainer>
            {contacts.length > 0 ? (
              contacts.map((contact, i) => (
                
                <ListCardContainer key={i}>
                  <Card
                    data={contact}
                    index={i}
                    removeContact={removeContact}
                  />
                </ListCardContainer>
              ))
            ) : (
              <Cover>
                <p>BTC</p>
                <p>User Profile Cards</p>
              </Cover>
            )}
          </ListContainer>
        }
      </div>
    </div>
  );
}

export default App;
