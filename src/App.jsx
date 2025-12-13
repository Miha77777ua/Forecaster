import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { Header } from "./components/Header/Header";
import { Modal } from "./components/Modal/Modal";
import { Hero } from "./components/Hero/Hero.jsx";
import { Profile } from "./components/Profile/Profile.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Slider } from "./components/Slider/Slider.jsx";
import { Cards } from "./components/Cards/Cards.jsx";
import { News } from "./components/News/News.jsx";
import api from "./api/user.js";
import wezApi from "./api/weather.js";

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isLogged, setLogged] = useState(JSON.parse(localStorage.getItem("logged")) || false);
  const [username, setUsername] = useState(localStorage.getItem("username") || "");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [cities, setCities] = useState(JSON.parse(localStorage.getItem("cities")) || []);

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

  const handleSearchForm = async (ev) => {
    ev.preventDefault();

    let data = await wezApi.weather(ev.target.elements.search.value);

    if (data.cod !== "404") {
      const date = new Date();

      const format = (num) => num < 10 ? "0" + num : num;

      const hours = format(date.getHours());
      const minutes = format(date.getMinutes());

      data = {
        ...data, liked: false, time: { hours: `${hours}:${minutes}`, date: date.toLocaleDateString(), day: date.getDay() },
      };

      localStorage.setItem("cities", JSON.stringify([...cities, data]));

      setCities([...cities, data]);
    }
  }

  const updateCard = async (id, city) => {
    let localCities = [...cities];

    localCities[id] = await wezApi.weather(city);

    const date = new Date();

    const format = (num) => num < 10 ? "0" + num : num;

    const hours = format(date.getHours());
    const minutes = format(date.getMinutes());

    localCities[id] = {
      ...localCities[id], liked: cities[id].liked, time: { hours: `${hours}:${minutes}`, date: date.toLocaleDateString(), day: date.getDay() },
    };

    localStorage.setItem("cities", JSON.stringify(localCities));

    setCities(localCities);
  }

  const removeCard = (id) => {
    let localCities = [...cities];

    localCities.splice(id, 1);

    localStorage.setItem("cities", JSON.stringify(localCities));

    setCities(localCities);
  }

  const favoriteCard = (id) => {
    let localCities = [...cities];

    localCities[id].liked = !localCities[id].liked;

    console.log(id);
    console.log(localCities[id].liked);

    localStorage.setItem("cities", JSON.stringify(localCities));

    setCities(localCities);
  }

  return (
    <>
      <ToastContainer />
      <Header toggleModal={toggleModal} username={username} toggleProfile={toggleProfile} />
      <Modal isModalOpen={isModalOpen} toggleModal={toggleModal} register={register} login={login} />
      <Profile isProfileOpen={isProfileOpen} toggleProfile={toggleProfile} logout={logout} username={username} email={email} />
      <Hero submit={handleSearchForm} />
      <Cards cities={cities} update={updateCard} remove={removeCard} favorite={favoriteCard} isLogged={isLogged} />
      <News />
      <Slider />
      <Footer />
    </>
  )
}

export default App;
