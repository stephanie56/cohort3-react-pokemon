import React from 'react';

export const Button = ({ children, submitSearchTerm }) => <button onClick={submitSearchTerm}>{children}</button>;
