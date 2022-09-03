import React from 'react';
import { EditorContent, useEditor, Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import {
  TextBolder,
  TextItalic,
  TextHThree,
  TextHFour,
  TextHFive,
  TextHSix,
  ListBullets,
  ListNumbers,
} from 'phosphor-react';
import './editor.scss';

const iconSize = 16;

const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="MenuBar">
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}>
        <TextHThree size={iconSize} />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}>
        <TextHFour size={iconSize} />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}>
        <TextHFive size={iconSize} />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}>
        <TextHSix size={iconSize} />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'is-active' : ''}>
        <TextBolder size={iconSize} />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'is-active' : ''}>
        <TextItalic size={iconSize} />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active' : ''}>
        <ListBullets size={iconSize} />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'is-active' : ''}>
        <ListNumbers size={iconSize} />
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
