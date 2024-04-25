import React from "react";
// import AppRouter from "./shared/router";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

function App() {
  // useNavigate를 사용한 페이지이동
  let navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return (
    <Layout>
      {/* <AppRouter /> */}
      {/* a태그 역할을 하는 Link를 활용한 페이지전환 가능 (링크 이동 시키기) */}
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Home으로 이동하는 버튼
      </button>
      <Link to='/'>Home으로 가기</Link>
      <Link to='/about'>About으로 가기</Link>
      <Link to='/contact'>Contact로 가기</Link>
      <Link to='/works'>Works로 가기</Link>
    </Layout>
  );
}

export default App;

const Layout = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
