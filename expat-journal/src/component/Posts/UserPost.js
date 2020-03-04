import React from "react";
import { Link } from "react-router-dom";
import { deletePost, getUserPosts } from "../../State/actionCreators";
import { connect } from "react-redux";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const UserPosts = props => {
  const history = useHistory();

  const handleEdit = e => {
    e.preventDefault();
    console.log(props);
    props.history.push(`/updatePost/${props.id}`);
  };

  const handleDelete = e => {
    e.preventDefault();
    console.log("delete Post!", props.id);
    props.deletePost(props.id);
  };

  return (
    <Link to={`/browser/${props.post.id}`}>
      <div className="post-card-container">
        <StyledPost className="styled-card">
          <img
            className="post-card-image"
            src="https://images.unsplash.com/photo-1456603719096-e977bdc92571?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
          />
          <h3>
            {props.post.first_name} {props.post.last_name}
          </h3>
          <h4>{props.post.location}</h4>
          <h4>{props.post.message}</h4>
          <button onClick={handleEdit} className="hover-grow">
            🖋
          </button>
          <button onClick={handleDelete} className="hover-grow">
            ✖
          </button>
        </StyledPost>
      </div>
    </Link>
  );
};

const mapStateToProps = state => {
  return {
    isDeletingPost:state.post.isDeletingPost,
    error:state.post.error,
    posts:state.post.posts
  };
};
export default connect(mapStateToProps, { deletePost,getUserPosts })(UserPosts);

const StyledPost = styled.div`
  border: 1px solid black;
  box-shadow: 0px 0px 22px -1px rgba(87, 81, 87, 0.65);
  background-color:#CFDEF3;
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
