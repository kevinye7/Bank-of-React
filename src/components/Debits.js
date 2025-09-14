import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

const Debits = (props) => {
  const [debits, setDebits] = useState([]);

  const debitsView = (debits) => {
    return debits.map((debit) => {
      let date = debit.date.slice(0, 10);
      return <li key={debit.id}>{debit.amount} {debit.description} {date}</li>;
    });
  };

  const fetchDebits = async () => {
    try {
      const response = await fetch("https://johnnylaicode.github.io/api/debits.json");
      if (response.ok) {
        const data = await response.json();
        setDebits(data);
      } else {
        throw new Error("NETWORK RESPONSE NOT OK");
      }
    } catch (error) {
      console.error("FETCH ERROR:", error);
    }
  };

  useEffect(() => {
    fetchDebits();
  }, []);

  return (
    <div>
      <h1>Debits</h1>

      <ul>
        {debitsView(debits)}
      </ul>

      <form onSubmit={props.addDebit}>
        <input type="text" name="description" />
        <input type="number" name="amount" />
        <button type="submit">Add Debit</button>
      </form>
      <br />
      <Link to="/">Return to Home</Link> 
    </div>
  );
};

export default Debits;

