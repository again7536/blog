import Prism from 'prismjs';
import { useRouter } from 'next/router';
import { useRef, useEffect } from 'react';
import caxios from 'src/lib/axios';
import { Editor } from '@toast-ui/react-editor';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import { debounce } from 'lodash';

import 'prismjs/themes/prism.css';
import '@toast-ui/editor/dist/toastui-editor.css';

import { Button } from '../button';

const MarkdownEditor = () => {
  const router = useRouter();
  const ref = useRef<Editor>(null);

  useEffect(() => {
    const id = router.query.id;
    if (!id) return;
    caxios
      .get('/posts/' + id)
      .then(result =>
        ref.current?.getInstance().setMarkdown(result.data.markdown)
      );
  }, []);

  const saveMarkdown = async (published: boolean) => {
    const id = router.query.id ?? null;
    const result = await caxios.post(`/posts?id=${id}`, {
      markdown: ref.current?.getInstance().getMarkdown(),
      published: published,
    });
    router.push(`/posts/new?id=${result.data}`, '', { shallow: true });
  };

  const handleSave = debounce(async (type: string, e: KeyboardEvent) => {
    if (!e.ctrlKey || e.key !== 's') return;
    try {
      await saveMarkdown(false);
    } catch (err) {
      console.error(err);
    }
  }, 200);

  const handleSubmit = async () => {
    try {
      await saveMarkdown(true);
      router.push('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Editor
        ref={ref}
        initialEditType="markdown"
        previewStyle="vertical"
        height="80vh"
        plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
        onKeydown={(type, event) => handleSave(type, event)}
        hooks={{
          async addImageBlobHook(blob, callback) {
            try {
              const formData = new FormData();
              formData.append('image', blob);

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
      <Button onClick={handleSubmit} color="red" className="mt-3">
        Submit
      </Button>
    </>
  );
};

export { MarkdownEditor };
