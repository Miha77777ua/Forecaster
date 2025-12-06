const news = async (page) => {
  const response = await fetch(`http://localhost:5000/news/${page}`);
  const data = await response.json();

  return data;
}

export default { news };
