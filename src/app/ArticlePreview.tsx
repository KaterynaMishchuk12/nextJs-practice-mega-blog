'use client';

import { useEffect, useState } from 'react';
import { ROUTING } from './routing';
import { Applink } from './shared/components/app-link';

type ArtivlePreviewProps = {
  name: string;
  text: string;
};

const getLikeKey = (articleName: string) => `kate_blog_1_llike_${articleName}`;

export function ArticlePreview({ name, text }: { name: string; text: string }) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const likeKey = getLikeKey(name);
    const likeValue = localStorage.getItem(likeKey);
    setLiked(likeValue === 'like');
  }, [name]);

  const like = () => {
    const likeKey = getLikeKey(name);
    localStorage.setItem(likeKey, 'like');
    setLiked(true);
  };

  return (
    <>
      <Applink href={ROUTING.article(name)}>{text}</Applink>;
      <button onClick={like} type="button">
        {liked ? 'finger' : 'like'}
      </button>
    </>
  );
}
