"use client"
import { Check, Copy } from "lucide-react";
import { Button } from "./ui/button";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import Color from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import Highlight from "@tiptap/extension-highlight";
import Placeholder from "@tiptap/extension-placeholder";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import Strike from "@tiptap/extension-strike";
import { toast, useToast } from "@/hooks/use-toast";
import { useState } from "react";
import Toolbar from "./Toolbar"; // Import the Toolbar component

export default function GeneratedContentSection() {
  const [copied, setCopied] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Strike,
      HorizontalRule,
      Link.configure({ openOnClick: false }),
      Image,
      TextStyle,
      Color,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Table.configure({ resizable: true }),
      TableRow,
      TableHeader,
      TableCell,
      Highlight,
      Placeholder.configure({ placeholder: "Start typing or generate content here..." }),
    ],
    content: "<p>Start typing or generate content here...</p>",
  });

  const handleCopy = () => {
    if (editor) {
      navigator.clipboard.writeText(editor.getText()).then(() => {
        setCopied(true);
        toast({
          title: "Content copied!",
          description: "The generated content has been copied to your clipboard.",
          duration: 1500,
        });
        setTimeout(() => setCopied(false), 1500);
      });
    }
  };

  return (
    <div className="bg-white shadow-lg border border-slate-200 rounded-2xl">
      <style>
        {`
          .ProseMirror ul,
          .ProseMirror ol {
            padding-left: 1.5rem;
            margin: 1rem 0;
          }
          .ProseMirror ul {
            list-style-type: disc;
          }
          .ProseMirror ol {
            list-style-type: decimal;
          }
          .ProseMirror blockquote {
            border-left: 3px solid #ccc;
            padding-left: 1rem;
            margin: 1rem 0;
            font-style: italic;
            color: #555;
          }
          .ProseMirror table {
            border-collapse: collapse;
            margin: 1rem 0;
            width: 100%;
          }
          .ProseMirror th,
          .ProseMirror td {
            border: 1px solid #ccc;
            padding: 0.5rem;
          }
          .ProseMirror th {
            background-color: #f3f4f6;
          }
        `}
      </style>

      <div className="p-5 flex justify-between items-center border-b border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900">Your Generated Response</h2>
        <Button onClick={handleCopy} className="bg-[#6C42F5] text-white hover:bg-[#5a38d1]">
          {copied ? (
            <div className="flex items-center gap-1">
              <Check className="size-4" />
              <span>Copied</span>
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <Copy className="size-4" />
              <span>Copy</span>
            </div>
          )}
        </Button>
      </div>

      {/* Use the Toolbar component */}
      <Toolbar editor={editor} />

      <EditorContent
        editor={editor}
        className="border border-slate-300 rounded-lg p-4 min-h-[450px] focus:outline-none text-slate-900"
      />
    </div>
  );
}