import React from 'react';

const UrlInputField = ({ url, setUrl, handleScrape }) => {
  return (
    <div>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL to scrape content"
      />
      <button onClick={handleScrape}>Scrape Content</button>
    </div>
  );
};

export default UrlInputField;
