import classNames from "classnames";
import './Todo.css';
import { ReactComponent as DeleteButton} from '../../icons/icons8-close.svg';

const Todo = ({text,completed, onToggleCompleted, onDelete}) =>
    (
        <div>
            <input
                type="checkbox"
                className="TodoList__checked"
                checked={completed}
                onChange={onToggleCompleted}
            />
            <p className="TodoList__text">{text}</p>
            <button
                type="button"
                className="TodoList__btn"
                onClick={onDelete}
        >
            <DeleteButton width="22px" heigth="22px" fill="blue"/>
            </button>
        </div>
    )


export default Todo;