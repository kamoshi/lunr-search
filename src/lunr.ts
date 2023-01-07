import lunr from "lunr";


export async function fetchData(): Promise<Article[]> {
  const data = await fetch('/index.json');
  return await data.json();
}

export function createIndex(articles: Article[]): lunr.Index {
  return lunr(function () {
    this.ref('url');
    this.field('title');
    this.field('content');

    for (const article of articles) {
      this.add(article);
    }
  });
}
