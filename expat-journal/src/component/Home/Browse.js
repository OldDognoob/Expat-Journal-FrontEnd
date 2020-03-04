import React, { useEffect } from "react";
import { connect } from "react-redux";
import UserPosts from "../Posts/UserPost";
import { getPosts } from "../../State/actionCreators";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";

const StyledContainer = styled.div`
  padding-top: 100px;
  background-repeat: no-repeat;
  padding-bottom: 200px;
  background-image: url("https://images.unsplash.com/photo-1470074558764-4e577e98bc85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

const StyledButton = styled.button`
  padding: 8px 12px;
  background-color: #24243e;
  color: #fff;
  width: 25%;
  border: 1px solid #22283a;
  padding: 1rem;
  line-height: 1;
  margin: 1.2rem;
  background-color: 250ms;
  margin-bottom: 50px;
  margin-right: 30px;
  border-radius: 4px;
  font-size: 1.5rem;
  :hover {
    cursor: pointer;
    background-color: white;
    color: #2da562;
    border: 1px solid #2da562;
  }

  label {
    padding: 1rem;
    color: #495057;
  }
  @media screen and (max-width: 500px) {
    width: 80%;
    margin-top: 5%;
    margin-bottom: 5%;
  }
`;

function Browse(props) {
  const { isLoadingPosts, getPosts, posts } = props;

  useEffect(() => {
    getPosts();
  }, []);

  if (isLoadingPosts) return <p>Loading...</p>;

  return (
    <StyledContainer>
      <div className="post-card-parent">
        <h1>Posts</h1>
        <Link to="/createPost">
          <StyledButton>CreatePost</StyledButton>
        </Link>
        <Grid container justify="center" spacing={4} className="post-cards">
          {posts.map(post => (
            <Grid key={post.id} item>
              <UserPosts post={post} />
            </Grid>
          ))}
        </Grid>
      </div>
    </StyledContainer>
  );
}

const mapStateToProps = state => {
  return {
    isLoadingPosts: state.post.isLoadingPosts,
    posts: state.post.posts
  };
};

export default connect(mapStateToProps, { getPosts })(Browse);
