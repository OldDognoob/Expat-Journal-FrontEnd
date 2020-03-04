import React from "react";
import { Link } from "react-router-dom";
import { getUserPosts } from "../../State/actionCreators";
import { connect } from "react-redux";
import styled from "styled-components";
import { Card, Image } from "semantic-ui-react";

const UserPosts = props => {
  return (
    <Link to={`/browser/${props.post.id}`}>
      <div className="post-card-container">
        <StyledPost className="styled-card">
          <img
            className="post-card-image"
            src="https://unsplash.com/photos/xnKJ1mJ9-_w"
          />
          <h3>
            {props.post.first_name} {props.post.last_name}
          </h3>
          <h4>{props.post.location}</h4>
          <h4>{props.post.message}</h4>
        </StyledPost>
      </div>
    </Link>
  );
};

const mapStateToProps = state => {
  return {
    // isLoadingUserPosts:state.postReducer.isLoadingUserPosts,
    // userPosts:state.postReducer.userPosts
  };
};
export default connect(mapStateToProps, { getUserPosts })(UserPosts);

const StyledPost = styled.div`
  border: 1px solid black;
  box-shadow: 0px 0px 22px -1px rgba(87, 81, 87, 0.65);
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  align-self: flex-start;
  max-width: 350px;
  margin:20px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 5px 1px 20px grey;
  font-size: 1.1rem;
  transition: 0.5s;
  color: black;
  &:hover {
    transform: scale(1.05);
`;
