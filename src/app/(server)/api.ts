import articles from './db.json';
import { delayed } from './delay';

export default function getAllArticles() {
  return delayed(articles, { timeout: 1500, shouldFail: true });
}
