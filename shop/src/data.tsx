import { useEffect, useState } from "react";

function Data() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/signup") // change this to your data endpoint
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  if (data === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Data;
