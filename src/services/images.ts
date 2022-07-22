import axios from 'axios';

const url = 'https://api.waifu.pics/many';

const getImages = async (type: string, category: string) => {
  try {
    const response = await axios.post(`${url}/${type}/${category}`, {});
    return response.data.files;
  } catch (e) {
    throw new Error('error fetching images');
  }
};

export default getImages;
