"use client";
import { useState } from "react";
import Card1 from "./Card";
import Navbar from "./Navbar";
export interface data {
    _id: string,
    title: string,
    description: string,
    creation_date: string,
    status: string,
}
export default function Display({ data }:{data:data[]}) {
  const [notes, setNotes] = useState(data);

  return (
    <div className="">
      <Navbar notes={notes} setNotes={setNotes} data={data} />
      <Card1 data={notes} setNotes={setNotes} />
    </div>
  );
}
