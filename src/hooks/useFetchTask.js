import { useContext } from "react";
import { Context } from "../context/Context";

// Fetch task from array using search id and return result
export default function useFetchTask() {
  const { tasks } = useContext(Context);

  const search = window.location.search;
  const getId = search.slice(4, search.length);
  const fetchTask = tasks.find((task) => task.id == getId);
  return fetchTask;
}
