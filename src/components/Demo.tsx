import useFetch from "../custom-hooks/useFetch";

function Demo() {
  const { status, data, error } = useFetch<any>("/ditto");

  return status === "fetched" ? (
    <div style={{ backgroundColor: "red", height: "500px", width: "500px" }}>
      {data.game_indices.map((x: any) => {
        return <p>{x.version.name}</p>;
      })}
    </div>
  ) : (
    <div>no data</div>
  );
}

export default Demo;
