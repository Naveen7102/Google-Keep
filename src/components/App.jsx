import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  var [notes, setNotes] = useState([]);

  function updateNotes(note) {
    setNotes((previous) => {
      return [...previous, note];
    });
    console.log(notes);
  }

  function deleteItem(id) {
    console.log("hello");
    setNotes((previous) => {
      return notes.filter((note, index) => {
        return index !== id;
      });
    });
    console.log(notes);
  }

  return (
    <div>
      <Header />
      <CreateArea onSubmit={updateNotes} />
      {notes.map((note, index) => {
        return (
          <Note
            key={note.title}
            id={index}
            deleted={deleteItem}
            title={note.title}
            content={note.content}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
