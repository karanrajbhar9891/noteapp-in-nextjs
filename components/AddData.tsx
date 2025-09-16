"use client";


import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { data } from "@/app/components/Display";
import { getData } from "./fetchdDta";
import { PlusIcon } from "lucide-react";

export function AddData({ setNotes }: {  setNotes: (notes: data[]) => void;}) {
  const [topic, setTopic] = useState("");
  const [des, setDes] = useState("");
  const [status, setStatus] = useState("");
  async function submitdata(e: React.FormEvent) {
    // console.log("trigger", topic, des);
    // e.preventDefault();
    const res = await fetch(`${process.env.BACKEND_URL}tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: topic, description: des }),
    });
    // console.log(res, "res");
    // let data = await res.json();
    // console.log(data);
    if (res.ok) {
      const data = await getData();
      setNotes(data);
      setTopic("");
      setDes("");
    }
  }
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild className="hidden sm:flex">
          <Button variant="outline">Add New Note</Button>
        </DialogTrigger>
        <DialogTrigger className="sm:hidden flex">
          <Button variant="outline"><PlusIcon/></Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create Note</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Topic</Label>
              <Input
                id="topic"
                name="name"
                value={topic}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setTopic(e.target.value);
                }}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">description</Label>
              <Input
                id="description"
                name="username"
                value={des}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setDes(e?.target?.value);
                }}
              />
            </div>
            <div className="grid gap-3 w-full">
              <Label htmlFor="status">Status</Label>
              <Select
                onValueChange={(value) => {
                  setStatus(value);
                }}
                value={status}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button onClick={submitdata}>Save changes</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
