'use client'
import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { oneDark } from '@codemirror/theme-one-dark';

function Editor() {
  const [value, setValue] = useState('print("poop, world!")');
  const [output, setOutput] = useState<string | null>(null);

  const onChange = React.useCallback((val: React.SetStateAction<string>, viewUpdate: any) => {
    setValue(val);
  }, []);

  const runCode = async () => {
    try {
      const response = await fetch('/api/run-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: value }),
      });

      const result = await response.json();
      setOutput(result.output);
    } catch (error) {
      console.error('Error running code:', error);
      setOutput('Error running code');
    }
  };

  return (
    <div>
      <CodeMirror
        value={value}
        height="450px"
        extensions={[python(), oneDark]}
        onChange={onChange}
      />
     
    </div>
  );
}

export default Editor;


