import fs from 'fs';
import path from 'path';

export function getPortfolio() {
  try {
    const filePath = path.join(process.cwd(), 'portfolio.json');
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(jsonData);
    return Array.isArray(data.works) ? data.works : [];
  } catch (error) {
    console.error('Error reading portfolio.json:', error);
    return [];
  }
}
