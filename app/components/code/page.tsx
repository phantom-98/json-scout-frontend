'use client'
import React, { useEffect } from 'react';
import Prism from 'prismjs';
// import 'prismjs/themes/prism.css'; // Ensure you import the necessary theme for highlighting
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'; // Line Numbers plugin
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'; // Line Numbers plugin CSS


interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  useEffect(() => {
    // Call Prism's highlight function after the component has mounted
    Prism.highlightAll();
  }, []);

  return (
    <pre className={`line-numbers language-${language}`}>
      <code className={`language-${language}`}>
        {code}
      </code>
    </pre>
  );
};

export default CodeBlock;


