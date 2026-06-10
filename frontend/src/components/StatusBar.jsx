import useEditorStore from "../store/editorStore";

function StatusBar() {
  const language = useEditorStore(
    (state) => state.language
  );

  const time = useEditorStore(
    (state) => state.time
  );

  const memory = useEditorStore(
    (state) => state.memory
  );

  return (
    <div
      className="
      h-8
      bg-slate-900
      border-t
      border-slate-800
      text-gray-300
      px-4
      flex
      items-center
      gap-6
      text-sm"
    >
      <span>
        Language: {language}
      </span>

      <span>
        Time: {time || "--"}
      </span>

      <span>
        Memory: {memory || "--"}
      </span>
    </div>
  );
}

export default StatusBar;