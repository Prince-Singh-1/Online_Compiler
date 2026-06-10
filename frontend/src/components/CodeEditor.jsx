import Editor from "@monaco-editor/react";
import useEditorStore from "../store/editorStore";

function CodeEditor() {
  const language = useEditorStore(
    (state) => state.language
  );

  const theme = useEditorStore(
    (state) => state.theme
  );

  const code = useEditorStore(
    (state) => state.codes[state.language]
  );

  const setCode = useEditorStore(
    (state) => state.setCode
  );

  return (
    <Editor
      height="100%"
      language={language}
      theme={theme}
      value={code}
      onChange={(value) =>
        setCode(value || "")
      }
    />
  );
}

export default CodeEditor;