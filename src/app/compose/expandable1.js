'use client'
import { useState } from 'react';
import { Button } from 'antd';
const Expandable1 = (props) => {
    const [isOpen, setOpen] = useState(false);
    return (<>
        {<Button onClick={() => setOpen(!isOpen)}>Toggle Server component</Button>}
        {isOpen && props.render}

    </>)
}
export default Expandable1;