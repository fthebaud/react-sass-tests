import React from 'react';

import Child from './child/Child';
import './Parent.scss';

const Parent = () => (
    <div className='parent'>
        <div>Parent</div>
        <Child />
    </div>
)

export default Parent;