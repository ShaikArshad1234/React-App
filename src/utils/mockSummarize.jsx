export const mockSummarize = (text, length = 'short') => {
  const summary = length === 'short' ? text.slice(0, 50) : length === 'medium' ? text.slice(0, 100) : text;
  return summary;
};
