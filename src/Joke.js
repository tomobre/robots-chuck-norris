import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 125px;
  margin-bottom: 2rem;
`;

const Speech = styled.div`
  background-color: #edf2f7;
  padding: 1rem;
  border-radius: 1rem;
  position: relative;
`;

const Image = styled.img`
  width: 125px;
  border-radius: 50%;
`;

const Label = styled.p`
  margin: 0;
  font-family: sans-serif;
  max-width: 25rem;
`;

const Joke = ({ data }) => {
  return (
    <Wrapper>
      <Speech>
        <Label>{data.value}</Label>
      </Speech>
      <Image src={`https://robohash.org/${data.id}`} alt={data.value} />
    </Wrapper>
  );
};

export default Joke;
