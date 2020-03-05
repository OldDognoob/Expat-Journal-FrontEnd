import React, { useState } from "react";
import { connect } from "react-redux";
import {deletePost} from "../../State/actionCreators";

const DeletePost = (props) => {
    const handleEdit = e => {
        e.preventDefault();
        console.log("edit clicked", props.id);
        props.history.push(`/updatePost/${props.id}`);
    }

    const handleDelete = e => {
        e.preventDefault();
        console.log('delete clicked!', props.id)
        props.deletePost(props.id);
    }
    return(
        <div className="post delete">
        <div className="post-head">
        <h3>{props.title}</h3>
            <div className="edit-del">
                <button onClick={handleEdit} className="hover-grow">🖋</button>
                <button onClick={handleDelete} className="hover-grow">✖</button>
            </div>
        </div>
        <p>{props.contents}</p>
        <div className='by-user'>By {props.user}</div>
    </div>
    )
}

const mapStateToProps = state => {
    return {
      posts: state.postsReducer.posts,
      isDeletingPost:state.postsReducer.isDeletingPost
    };
  };
  
  export default connect(mapStateToProps, { deletePost })(DeletePost);

  

