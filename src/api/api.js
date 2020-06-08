export const fetchData = async () => {
  try {
    const response = await fetch(
      'http://www.mocky.io/v2/5e3985263200006700ddfb33'
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
