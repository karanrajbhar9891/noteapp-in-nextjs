import { AddData } from "@/components/AddData";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { data } from "./Display";

export default function Navbar({
  notes,
  setNotes,
  data,
}: {
  notes: data[];
  setNotes: (notes: data[]) => void;
  data: data[];
}) {
  const [status, setStatus] = useState("");
  const [serachValue, setSeachValue] = useState("");
  const [serachData, setseachData] = useState(notes || []);
  const [filterData, setFilterData] = useState(notes || []);

  const statusFilter = (value: string) => {
    setStatus(value);
    if (value === "all") {
      setNotes(data);
    }
    const filterData1 = filterData.filter((ele: data) => ele.status === value);
    if (filterData1.length > 0) {
      setNotes(filterData1);
    }
  };

  const searchData = (e:  React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value && e.target.value === "") {
      setNotes(data);
    }
    setSeachValue(e.target.value);
    const serachData1 = serachData.filter((ele: data) =>
      ele?.title?.toLowerCase().includes(e.target.value.toLowerCase())
    );
    if (serachData1.length > 0) {
      setNotes(serachData1);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full flex justify-between bg-gradient-to-r from-blue-500 to-indigo-600 shadow-md ">
      {/* Title */}

      {/* Controls */}
      <div className="flex flex-wrap gap-4 pb-3 items-center justify-around sm:w-full w-[80%]">
        <div className="py-3">
          <h3 className="text-sm md:text-xl font-bold text-white tracking-wide">
            All Notes
          </h3>
        </div>
        {/* Status Filter */}
        <div className="">
          <Select onValueChange={statusFilter} value={status}>
            <SelectTrigger className="bg-white/90 w-full sm:w-40 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-400">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Desktop Search */}
        <div className="hidden sm:block ">
          <input
            value={serachValue}
            onChange={searchData}
            type="search"
            placeholder="Search notes..."
            className="bg-white/90 border border-gray-200 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Mobile Search Icon */}
        <div className="sm:hidden ">
          <Dialog>
            <DialogTrigger asChild>
              <button className="p-2 rounded-md bg-white/90 hover:bg-white text-blue-700">
                <Search className="h-5 w-5" />
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Search Note</DialogTitle>
              </DialogHeader>
              <input
                value={serachValue}
                onChange={searchData}
                type="search"
                placeholder="Search..."
                className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <DialogFooter>
                <DialogClose asChild>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setNotes(data);
                    }}
                  >
                    Cancel
                  </Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button>Search</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        
          
                    

        
      </div>
      <div className="flex items-center pb-3 md:pr-2">
        <AddData setNotes={setNotes}/>
      </div>
      
    </nav>
  );
}
