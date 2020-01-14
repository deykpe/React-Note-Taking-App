import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import notes from '../notes';
import CreateArea from './CreateArea';


function App() {
    function addNote(note) {
        console.log(note);
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