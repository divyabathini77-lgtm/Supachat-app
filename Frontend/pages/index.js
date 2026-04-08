import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

export default function Home() {
  const [query, setQuery] = useState("");
  const [history, setHistory] = useState([]);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/query", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ query })
      });
      const data = await res.json();
      setResult(data);
      setHistory([...history, query]);
    } catch (e) {
      alert("Error");
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Supachat UI</h1>

      <input value={query} onChange={(e)=>setQuery(e.target.value)} />
      <button onClick={handleSubmit}>Send</button>

      {loading && <p>Loading...</p>}

      <h3>History</h3>
      <ul>
        {history.map((h, i) => <li key={i}>{h}</li>)}
      </ul>

      {result && (
        <>
          <h3>Result</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>

          <LineChart width={400} height={200} data={[{x:1,y:2},{x:2,y:5}]}>
            <XAxis dataKey="x"/>
            <YAxis/>
            <Tooltip/>
            <Line dataKey="y"/>
          </LineChart>
        </>
      )}
    </div>
  );
}