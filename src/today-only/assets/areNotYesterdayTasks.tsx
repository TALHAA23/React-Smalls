export default function areNotYesterdayTask(): boolean {
  const tasks = JSON.parse(localStorage.getItem("myTasks"));
  if (!tasks) return false;
  const dateTaskAddedOn = new Date(tasks.lastUpdatetoLocalStorage).getDate();
  const now = new Date().getDate();

  return dateTaskAddedOn == now ? true : false;
}
