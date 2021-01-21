import './App.css';
import React, { useState, useEffect } from 'react';

import {fetchContactList} from './services.js'

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
     fetchContactList().then((contactData) => {
      setContacts(contactData)
    })
  }, []);

  return (
    <div className="App">
     <table className="table">
      <tr className="header">
       <th className="left-padding">Contact</th>
       <th>Total Value</th>
       <th>Location</th>
       <th id="dealCell">Deals</th>
       <th>Tags</th>
      </tr>
    {contacts.map((contact) => {
      return <tr className="row">
              <td className="left-padding" id="nameCell">{contact.fullName}</td>
              <td>{contact.valueTotal}</td>
              <td>{contact.location || "-"}</td>
              <td id="dealCell">{contact.deals.length}</td>
              <td>{contact.tags}</td>
             </tr>
    })}
    </table>
    </div>
  );
}

export default App;
