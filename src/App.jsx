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

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search onSearch={handleSearch} />
      
      <hr />
      
      <List list={stories.filter((item) => item.title.includes(searchTerm))} />
    </div>
  );
}

const Search = (props) => ( 
  <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" onChange={props.onSearch} />
  </div>
);

const List = (props) => (
  <ul>
    {props.list.map((item) => <Item key={item.objectId} item={item} />)}
  </ul>
);

const Item = (props) => {
  const item = props.item;

  return (
    <li>
      <a href={item.url}>{item.title}</a>
      <ul>
        <li>Author(s): {item.author}</li>
        <li>Comments: {item.numComments}</li>
        <li>Points: {item.points}</li>
      </ul>
    </li>
  );
}

export default App
