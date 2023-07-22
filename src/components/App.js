import { AddContact } from './AddContact';
import './App.css';
import { ContactList } from './ContactList';
import { Header } from './Header';

function App() {
  const contacts = [
    {
      id: '1',
      name: "vivek",
      email: "vivek@gmail.com"
    },
    {
      id: '2',
      name: "rajesh",
      email: "rajesh@gmail.com"
    },
    {
      id: '3',
      name: "himanshu",
      email: "himanshu@gmail.com"
    },
  ]
  return (
    <div className='ui container'>
      <Header/>
      <AddContact/>
      <ContactList list={contacts}/>
    </div>
  );
}

export default App;
