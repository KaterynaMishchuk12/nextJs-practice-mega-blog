import { getArticleByName } from '@/app/(server)/api';

export default async function ArticlePage({ params }: Params) {
  const { articleName } = params;

  const article = await getArticleByName(articleName);

  return (
    <>
      <h1>{article.header}</h1>
      {article.text.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </>
  );
}
