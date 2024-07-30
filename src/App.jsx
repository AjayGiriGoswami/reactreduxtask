import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import PostList from './Components/PostList';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostList />
      </div>
    </Provider>
  );
}

export default App;
