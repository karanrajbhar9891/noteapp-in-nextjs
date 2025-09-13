"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";

export function Searchdata2({ ele, setNotes }: { setNotes: any; ele: any }) {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Search</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <Input id="search" type="search" />
        </DialogContent>
      </form>
    </Dialog>
  );
}
