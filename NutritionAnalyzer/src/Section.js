import React from 'react';

function Section({ title, children }) {
    return (
        <div style={{ padding: '20px', border: '1px solid #666', borderRadius: '5px', margin: '10px 0' }}>
            {title && <h2 style={{ borderBottom: '1px solid #ddd' }}>{title}</h2>}
            {children}
        </div>
    );
}

export default Section;
