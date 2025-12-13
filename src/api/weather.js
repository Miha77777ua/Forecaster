const weather = async (city) => {
  try {
    const response = await fetch(`https://forecaster-back-96pv.onrender.com/weather/${city}`);
    const data = await response.json();

    return data;
  } catch {
    return undefined;
  }
}

const hourly = async (city) => {
  try {
    const response = await fetch(`https://forecaster-back-96pv.onrender.com/forecast/${city}`);
    const data = await response.json();

    return data.list.slice(0, 8);
  } catch {
    return undefined;
  }
}

const weekly = async (city) => {
  try {
    const response = await fetch(`https://forecaster-back-96pv.onrender.com/forecast/${city}`);
    const data = await response.json();

    console.log([data.list.slice(0, 8), data.list.slice(8, 16), data.list.slice(16, 24)]);

    return [data.list.slice(0, 8), data.list.slice(8, 16), data.list.slice(16, 24)];
  } catch {
    return undefined;
  }
}

export default { weather, hourly, weekly };
