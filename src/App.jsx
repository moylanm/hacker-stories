import * as React from 'react';

const App = () => {
  const stories = [
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

  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }

  const searchedStories = stories.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search searchTerm={searchTerm} onSearch={handleSearch} />
      
      <hr />
      
      <List list={searchedStories} />
    </div>
  );
}

const Search = ({ searchTerm, onSearch }) => (
  <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" value={searchTerm} onChange={onSearch} />
  </div>
);

const List = ({ list }) => (
  <ul>
    {list.map(({ objectId, ...item }) => <Item key={objectId} {...item} />)}
  </ul>
);

const Item = ({ title, url, author, numComments, points }) => (
  <li>
    <a href={url}>{title}</a>
    <ul>
      <li>Author(s): {author}</li>
      <li>Comments: {numComments}</li>
      <li>Points: {points}</li>
    </ul>
  </li>
);

export default App
