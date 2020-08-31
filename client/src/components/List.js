import React, { useEffect, useState } from "react";

const List = ({ isLoggedIn, user, title }) => {
  const [journalEntries, setJournalEntries] = useState([]);
  const [journalContentShow, setjournalContentShow] = useState(null);

  useEffect(() => {
    fetchJournalEntries();
  }, [title]);

  const fetchJournalEntries = () => {
    fetch(`/api/journal/all/${user.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      const resBody = res.json();
      Promise.resolve(resBody).then((journals) => {
        setJournalEntries(journals);
      });
    });
  };

  let journals = journalEntries;
  let journalList;
  if (journals.length > 0) {
    journalList = journals.map((journal) => (
      <li key={journal._id}>
        <div>
          <h4 className="journal-title">{journal.title}</h4>
          <p className="journal-date">{journal.createdAt.substring(0, 10)}</p>
          <p className="journal-content">
            {journalContentShow !== journal._id
              ? journal.content.substring(0, 100) + " ..."
              : journal.content}
          </p>
          <div>
            {journal._id !== journalContentShow ? (
              <button onClick={() => setjournalContentShow(journal._id)}>
                Read More
              </button>
            ) : (
              <button onClick={() => setjournalContentShow(null)}>
                Show Less
              </button>
            )}
          </div>
        </div>
      </li>
    ));
  } else {
    journalList = <li>There are no journal entries to display.</li>;
  }

  return (
    <div id="journal" className="list-container">
      <h2>Journal Entries for {user.email}</h2>
      <ul>{journalList}</ul>
    </div>
  );
};

export default List;
