import React, { useState } from "react";
import { connect } from "react-redux";
import { updatePost } from "../../State/actionCreators";

export function UpdatePost({ updatePost }) {
  const [post, setPostValues] = useState({ id: "", message: "", location: "" });

  const handleChange = event => {
    setPostValues({
      ...post,
      [event.target.name]: event.target.value
    });
  };
  const handleSubmit = event => {
    event.preventDefault();
    console.log(post);
    if (!post.id || !post.message || !post.location) {
      return alert("!Please update the post!");
    }
    updatePost(post);
  };
  return (
    <div className="update-post">
      <p className="update-title">What you want to add new?</p>
      <form onSubmit={handleSubmit} className="container">
        <label>
          <input
            type="text"
            name="message"
            onChange={handleChange}
            value={post.message}
            placeholder="Your new message here.."
          />
        </label>
        <label>
          <input
            type="text"
            name="location"
            onChange={handleChange}
            value={post.location}
            placeholder="Your new location here.."
          />
        </label>
        <button onClick={handleSubmit}>Update your Post</button>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    posts: state.post.userPosts,
    isUpdatingPost: state.post.isUpdatingPost
  };
};

export default connect(mapStateToProps, { updatePost })(UpdatePost);
