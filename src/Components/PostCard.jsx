import React from 'react';
import { useDispatch } from 'react-redux';
import { removePost } from '../redux/actions/Actions';

const PostCard = ({ post }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removePost(post.id));
  };

  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <button onClick={handleRemove}>❌</button>
    </div>
  );
};

export default PostCard;