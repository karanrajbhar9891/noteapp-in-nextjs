import { getData } from "@/components/fetchdDta";
import Display from "./components/Display";
// export  async function getData() {
//   try {
//     const data = await fetch(`${process.env.BACKEND_URL}tasks`);
//     const res = await data.json();
//     console.log(res, "data from function");
//     return res.tasks;
//   } catch (error) {
//     console.log(error);
//   }
// }
export default async function Home() {
  const data = await getData();
  // console.log(data);
  return (
    <div className="mx-4 mt-0">
      <Display data={data} />
    </div>
  );
}
