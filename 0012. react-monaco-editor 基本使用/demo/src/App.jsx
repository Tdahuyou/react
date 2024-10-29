// src/App.jsx
import { useRef } from 'react';
import MyEditor from './MyEditor';

function App() {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor) {
    editorRef.current = editor;
  }

  function showValue() {
    alert(editorRef.current.getValue());
  }

  function writeValue() {
    editorRef.current.setValue('// new value \n// this is new line');
  }

  return (
    <>
      <div className='editor-wrapper'>
        <button onClick={showValue}>Show value</button>
        <button onClick={writeValue}>Write value</button>
        <MyEditor
          width={'50vw'}
          height={'50vh'}
          onMount={handleEditorDidMount}
          defaultValue={`// some comment
#include "xxx.h"

void user_main(){
    // gen...
}`}
          language='c'
        />
      </div>
    </>
  );
}

export default App;