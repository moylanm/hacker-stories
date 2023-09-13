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
  const initialStories = [
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

  const getAsyncStories = () => 
    new Promise(resolve =>
      setTimeout(
        () => resolve({ data: { stories: initialStories } }),
        1500
      )
    );

  const [searchTerm, setSearchTerm] = useStorageState('search', '');

  const [stories, setStories] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);

    getAsyncStories().then(result => {
      setStories(result.data.stories);
      setIsLoading(false);
    });
  }, []);

  const handleRemoveStory = item => {
    const newStories = stories.filter(story => item.objectId !== story.objectId);

    setStories(newStories);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }

  const searchedStories = stories.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <InputWithLabel
        id="search"
        value={searchTerm}
        isFocused
        onInputChange={handleSearch}
      >
        <strong>Search:</strong>
      </InputWithLabel>
      
      <hr />
      
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <List 
          list={searchedStories}
          onRemoveItem={handleRemoveStory}
        />
      )}
    </div>
  );
}

const InputWithLabel = ({
  id,
  type = 'text',
  value,
  isFocused,
  onInputChange,
  children 
}) => (
  <>
    <label htmlFor={id}>{children}</label>
    &nbsp;
    <input
      id={id}
      type={type} 
      value={value}
      autoFocus={isFocused}  
      onChange={onInputChange}
    />
  </>
);

InputWithLabel.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  isFocused: PropTypes.bool,
  onInputChange: PropTypes.func,
  children: PropTypes.any
}

const List = ({ list, onRemoveItem }) => (
  <ul>
    {list.map(item => <Item key={item.objectId} onRemoveItem={onRemoveItem} item={item} />)}
  </ul>
);

List.propTypes = {
  list: PropTypes.array,
  onRemoveItem: PropTypes.func,
}

const Item = ({ onRemoveItem, item }) => (
  <li>
    <button type="button" onClick={() => onRemoveItem(item)}>X</button>
    &nbsp;
    <a href={item.url}>{item.title}</a>
    <ul>
      <li>Author(s): {item.author}</li>
      <li>Comments: {item.numComments}</li>
      <li>Points: {item.points}</li>
    </ul>
  </li>
);

Item.propTypes = {
  onRemoveItem: PropTypes.func,
  item: PropTypes.object
}

export default App
