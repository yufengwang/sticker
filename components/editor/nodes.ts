import type { Klass, LexicalNode } from "lexical";
import { ListItemNode, ListNode } from "@lexical/list";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { HorizontalRuleNode } from "@lexical/react/LexicalHorizontalRuleNode";

const EditorNodes: Array<Klass<LexicalNode>> = [
  HorizontalRuleNode,
  HeadingNode,
  QuoteNode,
  ListNode,
  ListItemNode,
];

export default EditorNodes;
