import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, removePost, changePage } from '../redux/actions/Actions';
import { Card, CardContent, Typography, IconButton, Grid, CircularProgress } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';

const PostList = () => {
  const dispatch = useDispatch();
  const { posts, loading, currentPage } = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchPosts());
    // Simulate a 5 second loading delay
    setTimeout(() => {}, 5000);
  }, [dispatch]);

  const handleRemovePost = (postId) => {
    dispatch(removePost(postId));
  };

  const handlePageChange = (pageNumber) => {
    dispatch(changePage(pageNumber));
  };

  const renderPosts = () => (
    <>
      {posts.map(post => (
        <Grid key={post.id} item xs={12} sm={6} md={4} lg={3}>
          <Card className="post-card">
            <CardContent>
              <Typography variant="h6">{post.title}</Typography>
              <Typography variant="body2" color="textSecondary">{post.body}</Typography>
              <IconButton onClick={() => handleRemovePost(post.id)} className="remove-btn">
                <CloseIcon />
              </IconButton>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </>
  );

  return (
    <div className="post-list">
      {loading ? (
        <div className="loading">
          <CircularProgress />
          <Typography>Loading...</Typography>
        </div>
      ) : (
        <>
          <Grid container spacing={3}>
            {renderPosts()}
          </Grid>
          <div className="pagination">
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
            <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
          </div>
        </>
      )}
    </div>
  );
};

export default PostList;
