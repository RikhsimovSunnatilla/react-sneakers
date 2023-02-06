import axios from 'axios';

export async function fetchProducts() {
  try {
    const res = await axios.get(`${process.env.REACT_APP_PUBLIC_URL}/products`);

    return await res.data;
  } catch (err) {
    console.error(err);
  }
}
