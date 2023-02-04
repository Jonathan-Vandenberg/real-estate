import { CSSProperties, useState } from "react";
import PuffLoader from "react-spinners/PuffLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function App() {
  let [loading, setLoading] = useState(true);

  return (
    <div className="sweet-loading mx-auto w-full">
      <PuffLoader
        size={30}
        color={"#000000"}
        loading={loading}
        cssOverride={override}
        aria-label="Loading Spinner"
      />
    </div>
  );
}

export default App;
