
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
import { useState } from "react";
import { DropdownMenu } from "./ui/dropdown-menu";
import { data } from "@/app/components/Display";
import { getData } from "./fetchdDta";

export function Editdata({ ele, setNotes }:{ele:data,setNotes:(notes: data[]) => void}) {
  const [title, setTitle] = useState(ele.title);
  const [description, setDescription] = useState(ele.description);
  const [status, setStatus] = useState(ele.status);
  // console.log(ele);
  const handleEdit = async (e: React.FormEvent) => {
    try {
      // e.preventDefault();
      console.log("edit data")
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}tasks/${ele._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title,
          description: description,
          status: status,
        }),
      });

      if (res.ok) {
        const data = await getData();
        setNotes(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  };
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild className="w-full">
          <Button variant="ghost">Edit</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Note</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="topic">Topic</Label>
              <Input
                id="topic"
                name="topic"
                defaultValue=""
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                name="description"
                defaultValue=""
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
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
            <DialogClose>
              <Button onClick={handleEdit}>Save changes</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
