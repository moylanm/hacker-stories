import * as React from 'react';

type ListProps = {
  list: Stories;
  onRemoveItem: (item: Story) => void;
};

const List: React.FC<ListProps> = React.memo(
  ({ list, onRemoveItem }) => (
    <ul>
      {list.map((item) => (
        <Item
          key={item.objectID}
          item={item}
          onRemoveItem={onRemoveItem}
        />
      ))}
    </ul>
  )
);

type ItemProps = {
  item: Story;
  onRemoveItem: (item: Story) => void;
};

const Item: React.FC<ItemProps> = ({ item, onRemoveItem }) => (
  <li className="item">
    <button
      type="button"
      onClick={() => onRemoveItem(item)}
      className="button button_small"
    >X</button>
    &nbsp;
    <a href={item.url}>{item.title}</a>
    <ul>
      <li>Author: {item.author}</li>
      <li>Comments: {item.num_comments}</li>
      <li>Points: {item.points}</li>
    </ul>
  </li>
);

export { List };