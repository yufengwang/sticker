import { useEffect } from "react";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { CheckListPlugin } from "@lexical/react/LexicalCheckListPlugin";
import ContentEditable from "./ContentEditable";
import Placeholder from "./Placeholder";
import nodes from "./nodes";
import theme from "./theme";
import ComponentPickerPlugin from "./component-picker-plugin";

import { $createHeadingNode, $createQuoteNode } from "@lexical/rich-text";
import { $createParagraphNode, $createTextNode, $getRoot } from "lexical";

function MyCustomAutoFocusPlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    // Focus the editor when the effect fires!
    editor.focus();
  }, [editor]);

  return null;
}

function prepopulatedRichText() {
  const root = $getRoot();
  if (root.getFirstChild() === null) {
    const heading = $createHeadingNode("h1");
    heading.append($createTextNode("Welcome to the playground"));
    root.append(heading);
  }
}

const Editor = () => {
  const text = "Enter some plain text...";
  const placeholder = <Placeholder>{text}</Placeholder>;
  function onError(error: any) {
    console.error(error);
  }
  const initialConfig = {
    editorState: prepopulatedRichText,
    namespace: "MyEditor",
    onError,
    nodes,
    theme,
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className={"editor-container"}>
        <RichTextPlugin
          contentEditable={
            <div className="editor-scroller">
              <div className="editor">
                <ContentEditable />
              </div>
            </div>
          }
          placeholder={placeholder}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <ComponentPickerPlugin />
        <MyCustomAutoFocusPlugin />
        <CheckListPlugin />
        <ListPlugin />
      </div>
    </LexicalComposer>
  );
};

export default Editor;
