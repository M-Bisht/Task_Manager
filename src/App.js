import React from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import ShowTasks from "./components/ShowTasks";
import FullTask from "./components/FullTask";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <div>
        <Toaster />
      </div>
      <Header />
      <AddTask />
      <ShowTasks />
      <FullTask />
      // <Footer />
    </>
  );
}
