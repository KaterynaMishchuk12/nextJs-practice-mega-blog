export default function ArticlePage({ params }: Params) {
  const { articleName } = params;

  return <>This is article: {articleName}</>;
}
