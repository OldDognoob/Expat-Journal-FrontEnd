import React, { useEffect } from "react";
import { connect } from 'react-redux';
import UserPosts from "../Posts/UserPost";
import {getPosts} from "../../State/actionCreators";
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';

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
    <Grid container justify="center" spacing={4} className="post-cards">
      {posts.map(post => (
        <Grid key={post.id} item>
       <UserPosts post={post} />
      </Grid>
      ))}
    </Grid>
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