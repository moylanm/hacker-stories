import * as React from 'react';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    numComments: 3,
    points: 4,
    objectId: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    numComments: 2,
    points: 5,
    objectId: 1
  },
]

const App = () => (
  <div>
    <h1>My Hacker Stories</h1>

    <Search />
    
    <hr />
    
    <List />
  </div>
);

const Search = () => (
  <div>
    <label htmlFor='search'>Search: </label>
    <input id='search' type='text' />
  </div>
);

const List = () => (
  <ul>
    {list.map((item) => (
      <li key={item.objectId}>
        <a href={item.url}>{item.title}</a>
        <ul>
          <li>Author(s): {item.author}</li>
          <li>Comments: {item.numComments}</li>
          <li>Points: {item.points}</li>
        </ul>
      </li>
    ))}
  </ul>
);

export default App
