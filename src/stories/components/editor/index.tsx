import Prism from 'prismjs';
import { useRef } from 'react';
import caxios from 'src/lib/axios';
import { Editor } from '@toast-ui/react-editor';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import { debounce } from 'lodash';

import 'prismjs/themes/prism.css';

import { Button } from '../button';

const MarkdownEditor = () => {
  const ref = useRef<Editor>(null);

  const saveMarkdown = async (published: boolean) => {
    await caxios.post('/posts', {
      markdown: ref.current?.getInstance().getMarkdown(),
      published: published,
    });
  };
  const handleSave = debounce(async (type: string, e: KeyboardEvent) => {
    if (!e.ctrlKey || e.key !== 's') return;
    try {
      await saveMarkdown(false);
    } catch (err) {
      console.error(err);
    }
  }, 200);

  return (
    <>
      <Editor
        ref={ref}
        initialEditType="markdown"
        previewStyle="vertical"
        plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
        onKeydown={(type, event) => handleSave(type, event)}
        hooks={{
          async addImageBlobHook(blob, callback) {
            try {
              const formData = new FormData();
              formData.append('image', blob);
              console.log(formData);

              const result = await caxios.post('/images', formData, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              });
              callback(result.data);
            } catch (err) {
              console.log(err);
            }
          },
        }}
      />
      <Button onClick={() => saveMarkdown(true)} color="red">
        Submit
      </Button>
    </>
  );
};

export { MarkdownEditor };
