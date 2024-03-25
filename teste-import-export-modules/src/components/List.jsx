import {add, mult, sub, div} from './Calculator'

function List() {
    return (
    <ul>
        <li>{add(1, 2)}</li>
        <li>{mult(2, 3)}</li>
        <li>{sub(7, 5)}</li>
        <li>{div(10, 2)}</li>
    </ul>);
}

export default List;