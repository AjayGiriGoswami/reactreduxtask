import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Pagination = () => {
  const dispatch = useDispatch();
  const { posts, currentPage } = useSelector(state => state.postState);

  const totalPages = Math.ceil(posts.length / 6);

  const handlePageChange = (page) => {
    dispatch({ type: 'SET_PAGE', payload: page });
  };

  return (
    <div className="pagination">
      <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
      {[...Array(totalPages)].map((_, index) => (
        <button key={index} onClick={() => handlePageChange(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
          {index + 1}
        </button>
      ))}
      <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
    </div>
  );
};

export default Pagination;