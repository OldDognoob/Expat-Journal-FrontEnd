import React, { useState } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../State/actionCreators";
import { useHistory, useParams } from "react-router-dom";
import { axiosWithAuth } from "../../utils/AxiosWithAuth";

export function UpdatePost(props) {
  const history = useHistory();
  console.log(props);
  const [post, setPost] = useState({ id: "", message: "", location: "" });
  const {id} = useParams()
  

  return (
    <div className="update-post">
      <p className="update-title">What you want to add new?</p>
      <form className="container">
        <label>
          <input
            type="text"
            name="message"
            onChange={props.handleChange}
            value={props.message}
            placeholder="Your new message here.."
          />
        </label>
        <label>
          <input
            type="text"
            name="location"
            onChange={props.handleChange}
            value={props.location}
            placeholder="Your new location here.."
          />
        </label>
        <button type="button" onClick={evt => props.handleSubmit(props.formValues, id)}>Update your Post</button>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    posts: state.post.userPosts,
    isUpdatingPost: state.post.isUpdatingPost,
    formValues: state.formValues
  };
};

export default connect(mapStateToProps, actionCreators)(UpdatePost);
