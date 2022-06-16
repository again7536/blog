import axios from 'axios';
import React, { useState } from 'react';
import { Button } from '../button';

const PostForm = () => {
  const [post, setPost] = useState({
    title: '',
    summary: '',
    img: '',
    markdown: '',
  });

  const handleChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: string
  ) => {
    setPost({ ...post, [key]: e.target.value });
  };

  const handleAddFile = (e: React.ChangeEvent<HTMLInputElement>, key: string) =>
    setPost({ ...post, [key]: e.target.files ? e.target.files[0] : '' });

  const submitForm = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      const formData = new FormData();

      formData.append('img', post.img);
      formData.append('markdown', post.markdown);
      formData.append('title', post.title);
      formData.append('summary', post.title);

      await axios.post('/api/posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          className="form-control"
          id="title"
          placeholder="title"
          value={post.title}
          onChange={e => handleChangeInput(e, 'title')}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="summary" className="form-label">
          Summary
        </label>
        <textarea
          className="form-control"
          id="summary"
          rows={3}
          value={post.summary}
          onChange={e => handleChangeInput(e, 'summary')}
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="img" className="form-label">
          Image URL
        </label>
        <input
          type="file"
          className="form-control"
          id="img"
          placeholder="image"
          onChange={e => handleAddFile(e, 'img')}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="markdown" className="form-label">
          File URL
        </label>
        <input
          type="file"
          className="form-control"
          id="markdown"
          placeholder="file"
          onChange={e => handleAddFile(e, 'markdown')}
        />
      </div>
      <Button onClick={submitForm}>submit</Button>
    </form>
  );
};

export { PostForm };
