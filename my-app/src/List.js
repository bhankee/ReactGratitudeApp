import React from 'react';

const List = props => {
  let list = props.listItems;
  let myList = list.map(item => {
    return <li>{item}</li>;
  });
  return <ol className="listStyle">{myList}</ol>;
};

export default List;
