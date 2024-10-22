import React, { useState, Fragment } from 'react';
import useDocumentTitle from './useDocumentTitle';

function Counter(props) {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")

    useDocumentTitle(`${name} has click ${count} times!`);

    return (
        <Fragment>
            <input type="text" onChange={e => setName(e.target.value)} />
            <div>
                {name} has click {count} times
            </div>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </Fragment>
    );
}

export default Counter;