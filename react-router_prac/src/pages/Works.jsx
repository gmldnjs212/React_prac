import React from "react";
import { useParams } from "react-router-dom";

function Works() {
  // useParams으로 받아오는 값은 router에서 설정한 이름과 동일해야 작동한다.
  const { workName } = useParams();
  console.log(workName);
  return <div>Works : {workName}</div>;
}

export default Works;
