import * as React from 'react';
import { PropTypes } from 'prop-types';

const useStorageState = (key, initialState) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initialState
  );

  React.useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
}

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

  const [searchTerm, setSearchTerm] = useStorageState('search', '');

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

Search.propTypes = {
  searchTerm: PropTypes.string,
  onSearch: PropTypes.func
}

const List = ({ list }) => (
  <ul>
    {list.map(({ objectId, ...item }) => <Item key={objectId} {...item} />)}
  </ul>
);

List.propTypes = {
  list: PropTypes.array
}

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

Item.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  author: PropTypes.string,
  numComments: PropTypes.number,
  points: PropTypes.number
}

export default App
