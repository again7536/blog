import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

interface MarkdownViewProps {
  post: string;
}

const MarkdownView = ({ post }: MarkdownViewProps) => {
  return (
    <ReactMarkdown
      components={{
        h1({ className, children, ...props }) {
          return <h1 className={className}>{children}</h1>;
        },
        h2({ className, children, ...props }) {
          return <h2 className={className}>{children}</h2>;
        },
        h3({ className, children, ...props }) {
          return <h3 className={className}>{children}</h3>;
        },
        code({ inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter
              language={match[1]}
              PreTag="div"
              {...props}
              style={docco}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    >
      {post}
    </ReactMarkdown>
  );
};

export { MarkdownView };
