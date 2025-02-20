"use client";
import { Check, Copy } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "@/hooks/use-toast";
import {  useState, useEffect, useRef } from "react";

import '@toast-ui/editor/dist/toastui-editor.css';
// import { Editor } from '@toast-ui/react-editor';
import dynamic from "next/dynamic";

// Dynamically import the editor to prevent SSR issues
const Editor = dynamic(() => import("@toast-ui/react-editor").then((mod) => mod.Editor), {
  ssr: false,
});


export default function GeneratedContentSection({aiOutput}:{aiOutput:string}) {

  const [copied, setCopied] = useState(false);

  const editorRef=useRef<any>(null);//ref to get editor instance to get and set content we have use useRef hook as we cant use useState hook to store editor instance as it will cause infinite re-rendering,as useRef acts as a mutable value which can be changed without causing re-rendering.

  const handleCopy=()=>{

    const markdownContent = editorRef.current?.getInstance().getMarkdown();
    if (markdownContent) {
      navigator?.clipboard.writeText(markdownContent);
      setCopied(true);
      toast({ description: "Copied to clipboard!", duration: 1500 });
      setTimeout(() => setCopied(false), 1500);
    }
    
  }

  //to show the aiOutput in text editor,on changing aiOutput
  useEffect(()=>{
    if(editorRef.current && aiOutput){
      editorRef.current.getInstance().setMarkdown(aiOutput);//set markdown content in editor instance to show aiOutput in editor
    }
  },[aiOutput]);

  //disable spellcheck in Toast UI editor as it is enabled by default
  useEffect(() => {
    const editorRoot = document.querySelector(".toastui-editor-contents");
    if (editorRoot) {
      editorRoot.setAttribute("spellcheck", "false");
    }
  }, []);

  return (
    <div className="bg-white shadow-lg border rounded-xl tui-editor no-spellcheck">
      <div className="p-5 flex justify-between items-center border-b">
        <h2 className="text-xl font-semibold text-slate-900">Generated Response</h2>
        <Button onClick={handleCopy}  className="bg-[#6C42F5] text-white hover:bg-[#5a38d1]">
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
        
        {/* Toast UI rich text editor */}
          <Editor
          ref={editorRef}
            initialValue="Generated Response will be displayed here..."
            height="570px"
            initialEditType="wysiwyg"
            useCommandShortcut={true}
            //onChange={()=>console.log(editorRef.current.getInstance().getMarkdown())}//method to get markdown content from editor instance in Toast UI editor
          />
    </div>
  );
}