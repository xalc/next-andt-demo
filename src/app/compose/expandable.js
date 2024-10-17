'use client'
import { useState } from 'react';
import { Button } from 'antd';
const Expandable = ({ children }) => {
    const [isOpen, setOpen] = useState(false);
    return (<>
        {<Button onClick={() => setOpen(!isOpen)}>Toggle Server component</Button>}
        {isOpen && children}

    </>)
}
export default Expandable;