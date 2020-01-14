import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import notes from '../notes';
import CreateArea from './CreateArea';
import { useState } from 'react';


function App() {
   const [notes, setNotes] = useState([]);

   function addNote(newNote) {
       setNotes(prevNotes => {
            return [...prevNotes, newNote];
       });
   }
   function deleteNote(id) {
       setNotes(prevNotes => {
        return prevNotes.fillter((noteItem, index) => {
            return index !== id;
        })
       });
   }
}

return (
    <div>
        <Header/>
        <CreateArea onAdd={addNote}/>
        <Note key={1} title='Note Title' content="Note Content"/>
        <Footer/>
    </div>
)

export default App;