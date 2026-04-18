export default function Watchlist() {
const data = [
{ name: "TCS", signal: "BUY", score: 92 },
{ name: "INFY", signal: "SELL", score: 85 }
];

return ( <div className="page">
<h3 style={{textAlign:"center"}}>WATCHLIST</h3>

```
  {data.map((d,i)=>(
    <div key={i} className="tableRow">
      <span>{d.name}</span>
      <span>{d.signal}</span>
      <span>{d.score}</span>
    </div>
  ))}
</div>
```

);
}
