import React from 'react';
import { EditorContent, useEditor, Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextBolder from './icons/TextBolder';
import TextItalic from './icons/TextItalic';
import TextHThree from './icons/TextHThree';
import TextHFour from './icons/TextHFour';
import TextHFive from './icons/TextHFive';
import TextHSix from './icons/TextHSix';
import ListBullets from './icons/ListBullets';
import ListNumbers from './icons/ListNumbers';
import './editor.scss';

const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="MenuBar">
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}>
        <TextHThree />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}>
        <TextHFour />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}>
        <TextHFive />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}>
        <TextHSix />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'is-active' : ''}>
        <TextBolder />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'is-active' : ''}>
        <TextItalic />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active' : ''}>
        <ListBullets />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'is-active' : ''}>
        <ListNumbers />
      </button>
    </div>
  );
};

interface EditorComponentProps {
  value: string;
  onChange: (value: string) => void;
}

const EditorComponent: React.FC<EditorComponentProps> = ({ value, onChange }): JSX.Element => {
  const editor = useEditor({
    extensions: [StarterKit],
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
    content: value,
  });

  return (
    <div>
      <MenuBar editor={editor} />

      <EditorContent editor={editor} />
    </div>
  );
};

export default EditorComponent;
