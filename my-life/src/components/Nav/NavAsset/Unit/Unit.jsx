import React, { useState, useEffect } from 'react';
import Styles from '../Unit/Unit.module.css';

function Unit({ content: initialContent }) {
    const [content, setContent] = useState(initialContent);

    useEffect(() => {
        if (initialContent.length > 4) {
            setContent(initialContent.slice(0, 4));
        }
    }, [initialContent]);

    const handleClick = () => {
        // Add your click handling logic here
    };

    return (
        <div className={Styles.container}>
            <p className={Styles.item}>{content}</p>
            <button className={Styles.button} onClick={handleClick}>X</button>
        </div>
    );
}

export default Unit;
