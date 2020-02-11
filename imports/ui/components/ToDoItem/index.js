import React from "react";
import PropTypes from "prop-types";
const ToDoItem = ({ todo, toggleComplete, removeTodo }) => {
  return (
    <li>
      {todo.title}
      {/* Other solution is defaultChecked */}
      <input
        type="checkbox"
        id={todo.id}
        checked={todo.complete}
        onChange={toggleComplete}
      />
      <label htmlFor={todo.id} />
      <button onClick={removeTodo}>
        <i className="fa fa-trash" />
      </button>
    </li>
  );
};

ToDoItem.propTypes = {
  todo: PropTypes.exact({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    complete: PropTypes.bool.isRequired
  }).isRequired
};
export default ToDoItem;