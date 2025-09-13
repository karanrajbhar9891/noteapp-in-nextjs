"use client";
import { useState } from "react";
import Card1 from "./Card";
import Navbar from "./Navbar";

export default function Display({ data }: any) {
  const [notes, setNotes] = useState(data);

  return (
    <div className="">
      <Navbar notes={notes} setNotes={setNotes} data={data} />
      <Card1 data={notes} setNotes={setNotes} />
    </div>
  );
}
