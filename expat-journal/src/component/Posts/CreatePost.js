import React,{useState} from 'react';
import { connect } from 'react-redux';
import { createPost} from "../../State/actionCreators";
import styled from "styled-components";

 export function CreatePost({createPost}){
   const[post,setPostValues]=useState({message:"",location:""})

   const handleChange =event => {
     setPostValues({
       ...post,
       [event.target.name]: event.target.value
     });
   };
   const handleSubmit = event =>{
     event.preventDefault();
     console.log(post);
     if(!post.message || !post.location){
       return alert("!Please complete the blanks!")
     }
     createPost(post);
   };
   return(
     <StyledContainer>
    <div className="create-post">
      <p className="create-title">What would you like to share?</p>
         <form onSubmit={handleSubmit} className="container">
        <label>
          <StyledInput
          type="text"
          name="message"
          value={post.message}
          onChange={handleChange}
          placeholder="Your message here.."
          />
        </label>
        <label>
          <StyledInput
           type="text"
           name="location"
           value={post.location}
           onChange={handleChange}
           placeholder="Your location here.."
           />
        </label>
        <StyledButton onClick={handleSubmit}>Send your Post</StyledButton>
      </form>
    </div>
    </StyledContainer>
  )
 }
 



  const mapStateToProps = state => {
      return{
      isAddingPost: state.post.isAddingPost,
      posts:state.post.state
      }
  };
  
  export default connect(mapStateToProps, { createPost })(CreatePost);

  
  const StyledContainer = styled.div`
  padding-top: 100px;
  background-repeat: no-repeat;
  padding-bottom: 700px;
  background-image: url("https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  background-size:100% 100%;
  
  
`;

const StyledInput = styled.input`
  margin: 1rem;
  width: 10%;
  margin-bottom: 10px;
  height: 2.3rem;
  border-radius: 0.20rem;
  border: 1px solid #ced4da;
  opacity:0.7;
  @media screen and (max-width: 500px) {
    margin: 8px auto;
  }
`;
const StyledButton = styled.button`
  padding: 10px 10px;
  background-color: #2da561;
  opacity:0.7;
  color: #fff;
  width: 10%;
  border: 1px solid #2da561;
  padding: 0.8rem;
  line-height: 1;
  background-color: 250ms;
  margin: 30 30 30 0;
  border-radius: 4px;
  font-size: 1rem;

  @media screen and (max-width: 500px) {
    text-align: center;
    margin: 0 auto;
    font-size: 1.3rem;
  }

  :hover {
    cursor: pointer;
    background-color: white;
    color: #2da562;
    border: 1px solid #2da562;
  }
`;