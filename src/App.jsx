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

function App() {
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <label htmlFor='search'>Search: </label>
      <input id='search' type='text' />
      <hr />
      <ul>
        {list.map(function (item) {
          return <li key={item.objectId}>
                    <a href={item.url}>{item.title}</a>
                    <ul>
                      <li>Author(s): {item.author}</li>
                      <li>Comments: {item.numComments}</li>
                      <li>Points: {item.points}</li>
                    </ul>
                 </li>;
        })}
      </ul>
    </div>
  );
}

export default App
