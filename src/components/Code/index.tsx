import SyntaxHighlighter from 'react-syntax-highlighter';
import vs from 'react-syntax-highlighter/dist/esm/styles/hljs/vs';

import { CodeContainer } from './styles';

export const Code = () => {
  const code =
    'int corte_varilla(int precios[], int n) {\n  ' +
    'int aux, i, j, valores[n + 1];\n  ' +
    'valores[0] = 0;\n\n  ' +
    'for(i = 1; i <= n; i++) {\n    ' +
    'int max_val = INT_MIN;\n    ' +
    'for(j = 0; j < i; j++) {\n      ' +
    'aux = precios[j] + valores[i - j - 1];\n      ' +
    'max_val = max(max_val, aux);\n    ' +
    '}\n    ' +
    'valores[i] = max_val;\n  }\n  ' +
    'return valores[n];\n}';

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
