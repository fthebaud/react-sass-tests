import React from 'react';

import SubChild from './sub-child/SubChild';
import './Child.scss';

const Child = () => (
    <div className='child'>
        <div>Child</div>
        <SubChild />
    </div>
);

export default Child;