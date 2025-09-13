import { Deletedata } from "@/components/Deletedata";
import { Editdata } from "@/components/Editdata";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Card1({
  data,
  setNotes,
}: {
  data: any;
  setNotes: any;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {data.map((ele: any, index: number) => (
        <Card
          key={index}
          className="bg-white border border-gray-100 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 rounded-2xl overflow-hidden"
        >
          <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 rounded-t-2xl">
            <CardTitle className="text-lg font-bold text-white">
              {ele.title}
            </CardTitle>
            <CardDescription className="text-sm text-blue-100">
              {ele.status}
            </CardDescription>
          </CardHeader>

          <CardContent className="p-4">
            <p className="text-gray-700 leading-relaxed">{ele.description}</p>
          </CardContent>

          <div className="grid grid-cols-2 gap-2 px-4 pb-4">
            <Editdata ele={ele} setNotes={setNotes} />
            <Deletedata ele={ele} setNotes={setNotes} />
          </div>
        </Card>
      ))}
    </div>
  );
}
