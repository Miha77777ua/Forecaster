import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Modal } from "./components/Modal/Modal";

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = (ev) => {
    if (["open", "backdrop"].includes(ev.target.id)) {
      console.log("Here");
      setModalOpen(!isModalOpen);
    }
  }

  return (
    <>
      <Header toggleModal={toggleModal} />
      <Modal isModalOpen={isModalOpen} toggleModal={toggleModal} />
    </>
  )
}

export default App
