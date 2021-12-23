import React, { useEffect } from "react";
import markdownStyles from './markdown-styles.module.css'
import hljs from "highlight.js";


export default function PostBody({ content }) {
  useEffect(() => {
    const blocks = document.querySelectorAll('pre code');
    blocks.forEach(hljs.highlightBlock);
  }, []);
  return (
    <div className=" mx-auto text-xl sm:text-2xl post-content">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
