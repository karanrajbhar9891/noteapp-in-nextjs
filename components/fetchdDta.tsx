export  async function getData() {
  try {
    const data = await fetch(`${process.env.BACKEND_URL}tasks`);
    const res = await data.json();
    console.log(res, "data from function");
    return res.tasks;
  } catch (error) {
    console.log(error);
  }
}