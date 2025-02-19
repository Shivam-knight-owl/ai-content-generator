import { Bold, Italic, Underline, Strikethrough, Heading1, Heading2, Heading3, Quote, List, ListOrdered, AlignLeft, AlignCenter, AlignRight, Table } from "lucide-react";
import { Button } from "./ui/button";

export default function Toolbar({ editor }: { editor: any }) {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2 p-4 border-b border-slate-200 bg-gray-100 rounded-t-lg">
      {/* Headings */}
      <Button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className={editor.isActive("heading", { level: 1 }) ? "bg-gray-700 text-white" : "text-slate-900 bg-gray-200"}>
        <Heading1 className="size-4" />
      </Button>

      <Button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={editor.isActive("heading", { level: 2 }) ? "bg-gray-700 text-white" : "text-slate-900 bg-gray-200"}>
        <Heading2 className="size-4" />
      </Button>

      <Button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className={editor.isActive("heading", { level: 3 }) ? "bg-gray-700 text-white" : "text-slate-900 bg-gray-200"}>
        <Heading3 className="size-4" />
      </Button>

      {/* Text Formatting */}
      <Button onClick={() => editor.chain().focus().toggleBold().run()} className={editor.isActive("bold") ? "bg-gray-700 text-white" : "text-slate-900 bg-gray-200"}>
        <Bold className="size-4" />
      </Button>

      <Button onClick={() => editor.chain().focus().toggleItalic().run()} className={editor.isActive("italic") ? "bg-gray-700 text-white" : "text-slate-900 bg-gray-200"}>
        <Italic className="size-4" />
      </Button>

      <Button onClick={() => editor.chain().focus().toggleUnderline().run()} className={editor.isActive("underline") ? "bg-gray-700 text-white" : "text-slate-900 bg-gray-200"}>
        <Underline className="size-4" />
      </Button>

      <Button onClick={() => editor.chain().focus().toggleStrike().run()} className={editor.isActive("strike") ? "bg-gray-700 text-white" : "text-slate-900 bg-gray-200"}>
        <Strikethrough className="size-4" />
      </Button>

      {/* Lists and Blockquote */}
      <Button onClick={() => editor.chain().focus().toggleBulletList().run()} className={editor.isActive("bulletList") ? "bg-gray-700 text-white" : "text-slate-900 bg-gray-200"}>
        <List className="size-4" />
      </Button>

      <Button onClick={() => editor.chain().focus().toggleOrderedList().run()} className={editor.isActive("orderedList") ? "bg-gray-700 text-white" : "text-slate-900 bg-gray-200"}>
        <ListOrdered className="size-4" />
      </Button>


      {/* Text Alignment */}
      <Button onClick={() => editor.chain().focus().setTextAlign("left").run()} className={editor.isActive({ textAlign: "left" }) ? "bg-gray-700 text-white" : "text-slate-900 bg-gray-200"}>
        <AlignLeft className="size-4" />
      </Button>

      <Button onClick={() => editor.chain().focus().setTextAlign("center").run()} className={editor.isActive({ textAlign: "center" }) ? "bg-gray-700 text-white" : "text-slate-900 bg-gray-200"}>
        <AlignCenter className="size-4" />
      </Button>

      <Button onClick={() => editor.chain().focus().setTextAlign("right").run()} className={editor.isActive({ textAlign: "right" }) ? "bg-gray-700 text-white" : "text-slate-900 bg-gray-200"}>
        <AlignRight className="size-4" />
      </Button>

      {/* Highlight */}
        <Button onClick={() => editor.chain().focus().setHighlight().run()} className={editor.isActive("highlight") ? "bg-gray-700 text-white" : "text-slate-900 bg-gray-200"}>
            Highlight
        </Button>

      {/* Colors */}
      <Button onClick={() => editor.chain().focus().setColor("#000000").run()} className="text-black bg-gray-200 hover:bg-gray-300">
        Black
      </Button>

      <Button onClick={() => editor.chain().focus().setColor("#6C42F5").run()} className="text-[#6C42F5] bg-gray-200 hover:bg-gray-300">
        Purple
      </Button>
      
      <Button onClick={() => editor.chain().focus().setColor("#00FF00").run()} className="text-green-500 bg-gray-200 hover:bg-gray-300">
        Green
      </Button>

      {/* Table */}
      <Button onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()} className="text-slate-900 bg-gray-200 hover:bg-gray-300">
        <Table className="size-4" />
      </Button>
    </div>
  );
}