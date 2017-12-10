import React from 'react';

const List = props => {
  let list = props.listItems;
  let myList = list.map(item => {
    return <li>{item}</li>;
  });
  return <ul>{myList}</ul>;
};

export default List;
