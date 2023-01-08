import lunr from "lunr";


const ADDRESS = '/index.json';

export async function prepareSearch(): Promise<[Record<string, Article>, lunr.Index]> {
  const data = await fetchData(ADDRESS);
  const index = createIndex(data);
  const articles = data.reduce((acc, a) => { acc[a.url] = a; return acc }, {});
  return [articles, index];
}


async function fetchData(address: string): Promise<Article[]> {
  const data = await fetch(address);
  return await data.json();
}

function createIndex(articles: Article[]): lunr.Index {
  return lunr(function () {
    this.ref('url');
    this.field('title');
    this.field('content');

    for (const article of articles) {
      this.add(article);
    }
  });
}
