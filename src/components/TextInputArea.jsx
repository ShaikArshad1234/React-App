import React from 'react';

const TextInputArea = ({ text, setText }) => {
  return (
    <textarea
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Paste or type your content here..."
      rows="10"
      cols="50"
    />
  );
};

export default TextInputArea;
