import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { Editor } from "react-draft-wysiwyg";
import { FormState } from './';
import toolbar from './toolbar';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

type Props = {
  control: Control<FormState>;
}

const DescriptionField = ({ control }: Props) => (
  <Controller
    name="description"
    control={control}
    defaultValue=""
    render={({ value, onChange }) => (
      <Editor
        toolbarClassName="toolbar-container"
        editorClassName="editor-container"
        editorState={value}
        onEditorStateChange={onChange}
        toolbar={toolbar}
      />
    )}
  />
);

export default DescriptionField;