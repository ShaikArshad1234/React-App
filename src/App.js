import React, { useState } from 'react';
import TextInputArea from './components/TextInputArea';
import UrlInputField from './components/UrlInputField';
import SummaryResult from './components/SummaryResult';
import LoadingIndicator from './components/LoadingIndicator';
import { scrapeContent } from './utils/scrapeContent';
import { mockSummarize } from './utils/mockSummarize';

const Dashboard = () => {
  const [text, setText] = useState('');
  const [url, setUrl] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleScrape = async () => {
    setLoading(true);
    setError('');
    try {
      const content = await scrapeContent(url);
      setText(content);
    } catch (e) {
      setError('Failed to fetch content from the URL');
    } finally {
      setLoading(false);
    }
  };

  const handleSummarize = () => {
    setLoading(true);
    const summarizedText = mockSummarize(text);
    setSummary(summarizedText);
    setLoading(false);
  };

  return (
    <div className="dashboard">
      <header>
        <h1>AI-Powered Content Summarizer</h1>
      </header>
      <main>
        <div className="input-section">
          <TextInputArea text={text} setText={setText} />
          <UrlInputField url={url} setUrl={setUrl} handleScrape={handleScrape} />
        </div>
        <button onClick={handleSummarize}>Generate Summary</button>
        {loading && <LoadingIndicator />}
        {error && <div className="error">{error}</div>}
        <SummaryResult originalText={text} summary={summary} />
      </main>
    </div>
  );
};

export default Dashboard;
