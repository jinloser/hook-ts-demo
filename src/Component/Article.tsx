import React, { useState } from 'react';

type ArticleInfo = {
  title: string;
  content: string;
};

const Article: React.FC<ArticleInfo> = ({ title, content }) => {
  const [article, setArticle] = useState<ArticleInfo>({ title, content });
  return (
    <>
      <div>Title:{article.title}</div>
      <section>{article.content}</section>
      <button
        onClick={() =>
          setArticle({
            title: '下一篇',
            content: '下一篇到内容',
          })
        }
      >
        下一篇
      </button>
    </>
  );
};

export default Article;
