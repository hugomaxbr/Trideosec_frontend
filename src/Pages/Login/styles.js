import styled from 'styled-components';
import color from '../../Styles/Colors';



export const Container = styled.div`
 
  background: ${color.backgroundBlack};
  display: flex;
  align-items:center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  --text-color: white;
  
  
  >form{
    width: 430px;
    height: 420px;
  }


  label{
    display: block;
    font-size: 1.2rem;
    color: white;
<<<<<<< HEAD
  };
  
=======
  }

  label{
    position: absolute;
    transform: translateY(-2rem);
    transform-origin: 0%;
    transition: transform 400ms;
  }

  input{
    outline: none;
    border: none;
    overflow: hidden;
    margin: 0 auto;
    width: 100%;
    padding: 0.25rem 0;
    background: none;
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
  }

`;



export const Form = styled.form`
  text-align: left;
  padding: 15px 46px;
  font-size: 24px;
  font-weight: 700;
>>>>>>> 63d2daaa555f062c603bbbbc4c0a94510102c272
  
  Button{
    margin-top: 50px;
  }

`;



export const Field = styled.div`

  width: 100%;
  position: relative;
  border-bottom: 2px dashed var(--text-color);
  margin: 4rem auto 1rem;

  &::after{
    content: "";
    position: relative;
    display: block;
    height: 4px;
    width: 100%;
    background: white;
    transform: scaleX(0);
    transform-origin: 0%;
    transition: transform 500ms ease;
    top: 2px;
  }

<<<<<<< HEAD
  label{
    position: absolute;
    transform: translateY(-2rem);
    transform-origin: 0%;
    transition: transform 400ms;
  }

  input{
    outline: none;
    border: none;
    overflow: hidden;
    margin: 0 auto;
    width: 100%;
    padding: 0.25rem 0;
    background: none;
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
  }


  &:focus-within{
=======
  &:focus-within {
>>>>>>> 63d2daaa555f062c603bbbbc4c0a94510102c272
    border-color: transparent;
  }

  &:focus-within::after {
    transform: scaleX(1);
  }

<<<<<<< HEAD
  .&:focus-within .label,
.input:not(:placeholder-shown) + .label {
=======
  &:focus-within label, input:not(:placeholder-shown) + label {
>>>>>>> 63d2daaa555f062c603bbbbc4c0a94510102c272
  transform: scale(0.8) translateY(-5rem);
  
}

`;
