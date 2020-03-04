import React, { useEffect } from "react";
import { connect } from 'react-redux';
import UserPosts from "../Posts/UserPosts";
import {getPosts} from "../../State/actionCreators";
import { Link } from "react-router-dom";


function Browse(props) {
  const{isLoadingPosts,getPosts,posts} = props

  useEffect(() => {
  getPosts();
  }, []);
  
if(isLoadingPosts)return(<p>Loading...</p>)

  return (
    <div className="post-card-parent">
      <h1>Posts</h1>
      <Link to='/createPost'><button>CreatePost</button></Link>
      <section className="post-cards">
        {posts.map(post => (
          <UserPosts key={post.id} post={post} />
        ))}
      </section>
    </div>
  );
}

const mapStateToProps = state => {
  return{
    isLoadingPosts:state.post.isLoadingPosts,
    posts:state.post.posts
  }
};

export default connect(mapStateToProps, { getPosts })(Browse);