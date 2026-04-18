export default function BottomNav({ setTab }) {
return (
<div style={{
display: "flex",
justifyContent: "space-around",
borderTop: "1px solid #FFD700",
padding: 8
}}>
<button onClick={() => setTab("home")}>HOME</button>
<button onClick={() => setTab("signal")}>SIGNAL</button>
<button onClick={() => setTab("watch")}>WATCH</button>
<button onClick={() => setTab("profile")}>PROFILE</button> </div>
);
}
