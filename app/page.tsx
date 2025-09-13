import Display from "./components/Display";
import { DataProvider } from "./components/DataContext";
export async function getData() {
  try {
    let data = await fetch("http://localhost:9000/tasks");
    let res = await data.json();
    console.log(res, "data from function");
    return res.tasks;
  } catch (error) {
    console.log(error);
  }
}
export default async function Home() {
  let data = await getData();
  // console.log(data);
  return (
    <div className="mx-4 mt-0">
      <Display data={data} />
    </div>
  );
}
