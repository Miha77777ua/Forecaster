import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { Header } from "./components/Header/Header";
import { Modal } from "./components/Modal/Modal";
import { Hero } from "./components/Hero/Hero.jsx";
import { Profile } from "./components/Profile/Profile.jsx";
import api from "./api/user.js";

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isLogged, setLogged] = useState(JSON.parse(localStorage.getItem("logged")) || false);
  const [username, setUsername] = useState(localStorage.getItem("username") || "");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");

  const toggleModal = (ev) => {
    if (["open", "backdrop"].includes(ev.target.id)) {
      setModalOpen(!isModalOpen);
    }
  }

  const toggleProfile = (ev) => {
    if (["profile", "profback"].includes(ev.target.id)) {
      setProfileOpen(!isProfileOpen);
    }
  }

  const register = async (ev) => {
    ev.preventDefault();

    const data = await api.register(ev.target.elements.user.value, ev.target.elements.email.value, ev.target.elements.password.value);

    console.log(data);

    if (data == "Success") {
      toast.success(data);
    } else {
      toast.error(data);
    }
  }

  const login = async (ev) => {
    ev.preventDefault();

    const data = await api.login(ev.target.user.value, ev.target.password.value);

    if (!data.error) {
      toast.success("Logged in!");

      setLogged(true); setUsername(data.login);
      setEmail(data.email);

      localStorage.setItem("logged", true);
      localStorage.setItem("username", data.login);
      localStorage.setItem("email", data.email);

      setModalOpen(false);
    } else {
      toast.error("Wrong username/email or password!");
    }
  }

  const logout = () => {
    setProfileOpen(false);

    setTimeout(() => {
      setUsername("");
      setEmail("");
      setLogged(false);

      localStorage.removeItem("logged");
      localStorage.removeItem("username");
      localStorage.removeItem("email");

      toast.info("Logged out");
    }, 500);
  }

  const handleSearchForm = (ev) => {
    ev.preventDefault();

    console.log("Submitted");
  }

  return (
    <>
      <ToastContainer />
      <Header toggleModal={toggleModal} username={username} toggleProfile={toggleProfile} />
      <Modal isModalOpen={isModalOpen} toggleModal={toggleModal} register={register} login={login} />
      <Profile isProfileOpen={isProfileOpen} toggleProfile={toggleProfile} logout={logout} username={username} email={email} />
      <Hero submit={handleSearchForm} />
    </>
  )
}

export default App
