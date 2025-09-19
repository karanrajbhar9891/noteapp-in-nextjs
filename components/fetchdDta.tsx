export  async function getData() {
  try {
    const data = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}tasks`);
    const res = await data.json();
    console.log(res, "data from function");
    return res.tasks;
  } catch (error) {
    console.log(error);
  }
}