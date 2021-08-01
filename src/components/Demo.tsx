import React from "react";
import useFetch from "../custom-hooks/useFetch";

// interface Pok {
//   userId: number
//   id: number
//   title: string
//   body: string
// }

function Demo() {
  const { status, data, error } = useFetch<any>("/ditto");
  console.log({ status, data, error });
  return <div>{status}</div>;
}

export default Demo;
