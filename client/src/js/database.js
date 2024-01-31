import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Adds logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.error('PUT request sent to the jateDB');

 // Create a connection to the database database and version we want to use.
 const jateDb = await openDB('note', 1);

// Create a new transaction and specify the database and data privileges.
const tx = jateDb.transaction(['note'], 'readwrite');

// Open up the desired object store.
const store = tx.objectStore('note');

 // Use .add method to update existing content
 const request = store.add({ content: content});

  // Get confirmation of the request.
  const result = await request;
  console.log('Data saved to the database', result);
};

//Adds logic for a method that gets all the content from the database
export const getDb = async () => console.error('GET request sent to the jateDB');

initdb();
