import axios from 'axios';
import { parse } from 'node-html-parser';

export const scrapeContent = async (url) => {
  try {
    const response = await axios.get(url);
    const root = parse(response.data);
    const mainContent = root.querySelectorAll('p, article').map(node => node.text).join(' ');
    return mainContent;
  } catch (error) {
    console.error('Error fetching content:', error);
    throw new Error('Failed to fetch content');
  }
};
