"use client";

import { useState } from "react";

const products = [MLBB
  { name: "Weekly Diamond Pass", price: "₱95" },
  { name: "56 Diamonds", price: "₱50" },
  { name: "112 Diamonds", price: "₱96" },
  { name: "223 Diamonds", price: "₱173" },
  { name: "279 Diamonds", price: "₱250" },
  { name: "336 Diamonds", price: "₱295" },
  { name: "448 Diamonds", price: "₱397" },
  { name: "570 Diamonds", price: "₱490" },
  { name: "1163 Diamonds", price: "₱975" },
  { name: "2398 Diamonds", price: "₱2,010" },
  { name: "6042 Diamonds", price: "₱4,750" },
  { name: "50+50 Diamonds", price: "₱55" },
  { name: "150+150 Diamonds", price: "₱165" },
  { name: "250+250 Diamonds", price: "₱255" },
  { name: "500+500 Diamonds", price: "₱520" },
];

export default function Home() {
  const [userId, setUserId] = useState("");
  const [server, setServer] = useState("");
  const [selected, setSelected] = useState(null);

  return (
    <main style={{ fontFamily: "Arial", padding: 20 }}>
      <h1>🎮 Arcadia Game Top-Up</h1>

      <input placeholder="User ID" onChange={(e)=>setUserId(e.target.value)} />
      <input placeholder="Server ID" onChange={(e)=>setServer(e.target.value)} />

      <h3>Select Diamonds</h3>
      {products.map((p,i)=>(
        <button key={i} onClick={()=>setSelected(p)}>
          {p.name} - {p.price}
        </button>
      ))}

      <h3>Summary</h3>
      <p>UID: {userId}</p>
      <p>Server: {server}</p>
      <p>Product: {selected?.name}</p>

      <button onClick={()=>alert("Order Submitted!")}>
        Confirm Order
      </button>
    </main>
  );
}
