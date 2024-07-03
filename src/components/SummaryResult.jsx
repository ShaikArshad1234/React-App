import React from 'react';

const SummaryResult = ({ originalText, summary }) => {
  return (
    <div className="summary-result">
      <div>
        <h2>Original Text</h2>
        <p>{originalText}</p>
      </div>
      <div>
        <h2>Summary</h2>
        <p>{summary}</p>
      </div>
    </div>
  );
};

export default SummaryResult;
