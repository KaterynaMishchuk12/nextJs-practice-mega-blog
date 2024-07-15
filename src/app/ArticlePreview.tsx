'use client';

import { useEffect, useState } from 'react';
import { ROUTING } from './routing';
import { Applink } from './shared/components/app-link';
import { articleStorage } from './ArticleStorage';

type ArtivlePreviewProps = {
  name: string;
  text: string;
};

export function ArticlePreview({ name, text }: { name: string; text: string }) {
  const [liked, setLiked] = useState(articleStorage.liked(name));

  // useEffect(() => {
  //   const likeKey = getLikeKey(name);
  //   const likeValue = localStorage.getItem(likeKey);
  //   setLiked(likeValue === 'like');
  // }, [name]);

  const like = () => {
    articleStorage.like(name);
    setLiked(true);
  };
  // ***** suppressHydrationWarning на кнопці потребує уваги
  return (
    <>
      <Applink href={ROUTING.article(name)}>{text}</Applink>;
      <button onClick={like} type="button" suppressHydrationWarning>
        {liked ? 'finger' : 'like'}
      </button>
    </>
  );
}
