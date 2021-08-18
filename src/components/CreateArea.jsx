import React, { useState } from "react";

function CreateArea(props) {
  var [note, setNote] = useState({ title: "", content: "" });

  function handleChange(event) {
    var { name, value } = event.target;
    setNote((previous) => {
      return { ...previous, [name]: value };
    });
  }

  return (
    <div>
      <form
        onSubmit={(event) => {
          props.onSubmit(note);
          event.preventDefault();
          setNote({ title: "", content: "" });
        }}
      >
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={note.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
