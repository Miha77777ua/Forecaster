const news = async (page) => {
  const response = await fetch(`https://forecaster-back-96pv.onrender.com/news/${page}`);
  const data = await response.json();

  return data;
}

export default { news };
