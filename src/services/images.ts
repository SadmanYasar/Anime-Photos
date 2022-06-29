import axios from 'axios';

const url = 'https://api.waifu.pics/many';

const getImages = async (type: string, category: string) => {
  const response = await axios.post(`${url}/${type}/${category}`, {});
  return response.data.files;
};

export default getImages;
