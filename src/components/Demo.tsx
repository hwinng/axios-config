import useFetch from "../custom-hooks/useFetch";

function Demo() {
  const { status, data, error } = useFetch<any>("/ditto");
  console.log({ status, data, error });
  return <div>{status}</div>;
}

export default Demo;
