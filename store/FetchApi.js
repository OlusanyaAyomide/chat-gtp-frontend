import axios from "axios";
import { oneChatDemo, oneImageChatDemo, nav } from "../src/assets/constants";

const host = "https://myopenai.pythonanywhere.com";
export const fetchText = async (inputValue) => {
  // axios POST request
  const text = inputValue.replace(/\W+/g, "-");
  try {
    const response = await axios.get(`${host}/?text=${text}`);
    if (response.status === 200) {
      const data = {
        status: response.status,
        request: inputValue,
        response: response.data.data.choices[0].text,
        texts: response.data.history,
      };
      return data;
    } else {
      console.log("here", response.status);
      return {
        status: 432,
        request: inputValue,
        time: response.data.res,
      };
    }
  } catch (err) {
    return {
      status: 404,
    };
  }
};

export const fetchImage = async (inputValue) => {
  const text = inputValue.replace(/\W+/g, "-");
  console.log(text);
  try {
    const response = await axios.get(`${host}/search?text=${text}`);
    console.log(response.data);
    if (response.status === 200) {
      const data = {
        status: 200,
        request: inputValue,
        response: response.data.data.data,
        texts: response.data.history,
      };
      return data;
    } else {
      return {
        status: 432,
        request: inputValue,
        time: response.data.res,
      };
    }
  } catch (err) {
    return {
      status: 404,
    };
  }
};

export const fetchNavItems = async () => {
  try {
    const { data } = await axios.get(`${host}/nav`);
    return data;
  } catch (err) {
    return nav;
  }
};

// first

// 432
