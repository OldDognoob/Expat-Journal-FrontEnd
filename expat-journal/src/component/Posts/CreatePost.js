import React, { useState } from "react";
import { connect } from "react-redux";
import { createPost } from "../../State/actionCreators";

export function CreatePost({ createPost }) {
  const [post, setPostValues] = useState({ message: "", location: "" });

  const handleChange = event => {
    setPostValues({
      ...post,
      [event.target.name]: event.target.value
    });
  };
  const handleSubmit = event => {
    event.preventDefault();
    console.log(post);
    if (!post.message || !post.location) {
      return alert("!Please complete the blanks!");
    }
    createPost(post);
  };
  return (
    <div className="create-post">
      <p className="create-title">What would you like to share?</p>
      <form onSubmit={handleSubmit} className="container">
        <label>
          <input
            type="text"
            name="message"
            value={post.message}
            onChange={handleChange}
            placeholder="Your message here.."
          />
        </label>
        <label>
          <input
            type="text"
            name="location"
            value={post.location}
            onChange={handleChange}
            placeholder="Your location here.."
          />
        </label>
        <button onClick={handleSubmit}>Send your Post</button>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isAddingPost: state.post.isAddingPost,
    posts: state.post.state
  };
};

export default connect(mapStateToProps, { createPost })(CreatePost);
