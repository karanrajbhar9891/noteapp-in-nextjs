import { data } from "@/app/components/Display";

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
import { getData } from "./fetchdDta";

export function Deletedata({ ele, setNotes }:{ele:data,setNotes:(notes: data[]) => void}) {
  const erasedata = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}tasks/${ele._id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      if (res.ok) {
        const data = await getData();
        setNotes(data);
      }
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild className="w-full">
          <Button variant="ghost">Delete</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Are you Sure want to Delete this </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4"></div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <DialogClose>
              <Button onClick={erasedata}>Delete </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
