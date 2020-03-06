import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { deletePost, getUserPosts } from "../../State/actionCreators";
import { connect } from "react-redux";
import styled from "styled-components";
import { axiosWithAuth } from "../../utils/AxiosWithAuth";
import { useHistory, useParams } from "react-router-dom";

const UserPosts = props => {
  const history = useHistory();

  const handleEdit = e => {
    e.preventDefault();
    console.log(props);
    history.push(`/updatePost/${props.post.id}`);
  };

  const handleDelete = e => {
    e.preventDefault();
    console.log("delete Post!", props.post.id);
    props.deletePost(props.post.id);
  };

  const { id } = useParams();

  return (
    <Link to={`/browser/${props.post.id}`}>
      <div className="post-card-container">
        <StyledPost className="styled-card">
          <img
            className="post-card-image"
            src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          />
          <h3>
            {props.post.first_name} {props.post.last_name}
          </h3>
          <h4>{props.post.location}</h4>
          <h4>{props.post.message}</h4>
          <StyledButton onClick={handleEdit} className="hover-grow">
            🖋
          </StyledButton>
          <StyledButton
            onClick={e => handleDelete(e, props.post.id)}
            className="hover-grow"
          >
            ✖
          </StyledButton>
        </StyledPost>
      </div>
    </Link>
  );
};

const mapStateToProps = state => {
  return {
    isDeletingPost: state.post.isDeletingPost,
    error: state.post.error,
    posts: state.post.posts
  };
};
export default connect(mapStateToProps, { deletePost, getUserPosts })(
  UserPosts
);

const StyledPost = styled.div`
  border: 1px solid black;
  box-shadow: 0px 0px 22px -1px rgba(87, 81, 87, 0.65);
  background-color: #cfdef3;
  opacity: 0.7;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  align-self: flex-start;
  max-width: 350px;
  margin: 20px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 5px 1px 20px grey;
  font-size: 1.1rem;
  transition: 0.5s;
  color: black;
  img {
    width: 100%;
  }
  &:hover {
    transform: scale(1.05);
  }
`;

const StyledButton = styled.button`
  padding: 8px 8px;
  background-color: #2da561;
  color: #fff;
  width: 30%;
  border: 1px solid #2da561;
  padding: 0.6rem;
  line-height: 1;
  background-color: 250ms;
  margin: 30 40 40 0;
  border-radius: 2px;
  font-size: 1rem;
  display: flex-box;
  justify-content: space-between;

  @media screen and (max-width: 500px) {
    text-align: center;
    margin: 0 auto;
    font-size: 1.5rem;
  }

  :hover {
    cursor: pointer;
    background-color: white;
    color: #2da562;
    border: 1px solid #2da562;
  }
`;
