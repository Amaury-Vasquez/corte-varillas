import SyntaxHighlighter from 'react-syntax-highlighter';
import vs from 'react-syntax-highlighter/dist/esm/styles/hljs/vs';

import { CodeContainer } from './styles';

export const Code = (props: { code: string }) => {
  const { code } = props;

  return (
    <CodeContainer>
      <SyntaxHighlighter
        language="c"
        style={vs}
        showLineNumbers={true}
        wrapLines={true}
      >
        {code}
      </SyntaxHighlighter>
    </CodeContainer>
  );
};
